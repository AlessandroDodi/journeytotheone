// /api/test-db.js
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Test the connection by running a simple query
    const result = await sql`SELECT NOW() as current_time`;
    
    return res.status(200).json({ 
      success: true, 
      message: 'Database connection successful',
      timestamp: result[0]?.current_time 
    });
  } catch (err) {
    console.error('Database connection error:', err);
    return res.status(500).json({ 
      error: 'Database connection failed',
      details: err.message 
    });
  }
}
