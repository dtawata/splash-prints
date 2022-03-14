import { connection } from '../../lib/db.js';

export default async function handler(req, res) {
  try {
    const queryString = 'select * from users';
    const queryArgs = [];
    const data = await connection.promise().query(queryString);
    res.send(data[0]);
  }
  catch(err) {
    throw err;
  }
}