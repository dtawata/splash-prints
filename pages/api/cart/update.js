import { connection } from '../../../lib/db.js';
import { getSession } from 'next-auth/client';

const handler = async (req, res) => {
  const session = await getSession({ req: req });
  if (!session) {
    return;
  }
  const { id, qty } = req.body;
  const email = session.user.email;
  const queryString = 'update cart set qty = ? where id = ? and email = ?';
  const queryArgs = [qty, id, email];
  const data = await connection.promise().query(queryString, queryArgs);
  res.status(201).send(data[0]);
};

export default handler;