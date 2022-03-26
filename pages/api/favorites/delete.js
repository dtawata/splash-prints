import { connection } from '../../../lib/db';
import { getSession } from 'next-auth/client';

const handler = async (req, res) => {
  const session = await getSession({ req: req });
  console.log(req.body.id);
  if (!session) {
    return;
  }
  const { id } = req.body;
  const email = session.user.email;
  const queryString = 'delete from favorites where id = ? and email = ?';
  const queryArgs = [id, email];
  const data = connection.promise().query(queryString, queryArgs);
  res.status(201).send(data[0]);
};

export default handler;