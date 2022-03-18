import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { connection } from '../../../lib/db';
import { verifyPassword } from '../../../lib/auth';

export default NextAuth({
  session: {
    jwt: true
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const queryString = 'select * from users where email = ?';
        const queryArgs = [credentials.email];
        const data = await connection.promise().query(queryString, queryArgs);
        const user = data[0][0];
        if (!user) {
          throw new Error('User not found!');
        }
        const validPassword = await verifyPassword(credentials.password, user.password);
        if (!validPassword) {
          throw new Error('Password is not valid!');
        }
        return { email: credentials.email };
      }
    })
  ]
});