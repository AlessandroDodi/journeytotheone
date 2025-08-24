import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, project, referrer } = await request.json();

    if (!email || !project) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS beta_signups (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL,
        project TEXT NOT NULL,
        referrer TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `;

    // Insert new signup
    await sql`
      INSERT INTO beta_signups (email, project, referrer)
      VALUES (${email}, ${project}, ${referrer});
    `;

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Error saving signup:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
