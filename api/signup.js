// /api/signup.js
import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, project, referrer } = req.body;

  if (!email || !project) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
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

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error saving signup:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}