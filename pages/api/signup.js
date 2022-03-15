import { connection } from '../../lib/db.js';
import { hashPassword } from '../../lib/auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const { email, password } = req.body;
  if (!email || !password || !email.includes('@')) {
    res.status(422).send({message: 'invalid request'});
    return;
  }

  try {
    const existingUserQueryString = 'select * from users where email = ? limit 1';
    const existingUserQueryArgs = [email];
    const existingUser = await connection.promise().query(existingUserQueryString, existingUserQueryArgs);
    if (existingUser[0].length > 0) {
      res.status(422).send({message: 'User already exists.'});
      return;
    }
    const hashedPassword = await hashPassword(password);
    const queryString = `insert into users(email, password) values(?, ?)`;
    const queryArgs = [email, hashedPassword];
    const data = await connection.promise().query(queryString, queryArgs);
    res.status(201).send({message: 'User successfully created!'});
  }
  catch(err) {
    throw err;
  }
};
