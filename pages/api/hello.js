// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession } from 'next-auth/client';
import { connection } from '../../lib/db.js';

export default async function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
