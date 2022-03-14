import { connection } from '../../lib/db.js';

export default async function handler(req, res) {
  let id = req.query['id[]'];
  if (typeof id !== 'object') {
    id = [id];
  };
  try {
    const queryString = 'select * from prints where id in ?';
    const queryArgs = [[id]];
    const data = await connection.promise().query(queryString, queryArgs);
    res.send(data[0]);
  }
  catch(err) {
    throw err;
  }
}