import { connection } from '../../../lib/db.js';
import { getSession } from 'next-auth/client';

const handler = async (req, res) => {
  const session = await getSession({ req: req });
  if (!session) {
    return;
  }
  const { print_id, price, size } = req.body;
  const email = session.user.email;
  const queryString = 'insert into favorites (email, print_id, price, size) values (?, ?, ?, ?)';
  const queryArgs = [email, print_id, price, size];
  const data = await connection.promise().query(queryString, queryArgs);
  res.status(201).send(data[0]);
};

export default handler;