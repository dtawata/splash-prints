import styles from '../../styles/Thanks.module.css';
import Image from 'next/image';
import { getSession } from 'next-auth/client';
import { getCart } from '../../lib/db';

const Thanks = (props) => {
  return (
    <div className={styles.thanks}>
      <h1>Thank you for demoing my application!</h1>
      <div className={styles.connect}>Connect with me on <a href='https://www.linkedin.com/in/daniel-tawata/' target='_blank' rel='noreferrer'>LinkedIn: Daniel Tawata</a></div>
      <div className={styles.flex}>
        <div className={styles.section}>
          <div className={styles.title}>Tech Stack:</div>
          <ul>
            <li><strong>Front End:</strong> React, Next.js, CSS</li>
            <li><strong>Back End:</strong> Next.js, NextAuth, MySQL, Bcryptjs</li>
          </ul>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>Future Features:</div>
          <ul>
            <li>Mobile responsive.</li>
            <li>Display favorites.</li>
            <li>Add a reviews section</li>
            <li>Customer support chatbox</li>
            <li>Make a neon logo + shadow</li>
          </ul>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>Next Projects:</div>
          <ul>
            <li>Create a Blockchain.</li>
            <li>Messaging Application</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Thanks;


export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      props: {
        isLoggedIn: false,
        initial: {}
      }
    }
  }
  const email = session.user.email;
  const initialize = await getCart(email);
  const cart = initialize.reduce((accumulator, item) => {
    accumulator[item.obj_key] = item;
    return accumulator;
  }, {});

  return {
    props: {
      isLoggedIn: true,
      initial: cart
    }
  }
}