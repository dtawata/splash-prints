import styles from '../styles/Home.module.css'
import Gallery from '../components/home/Gallery';
import { getPrints, getCart } from '../lib/db.js';
import { getSession } from 'next-auth/client';

const Home = (props) => {
  return (
    <div className={styles.home}>
      <Gallery prints={props.prints} />
    </div>
  );
};

export default Home;

export const getServerSideProps = async (context) => {
  const fetchSession = getSession({ req: context.req });
  const fetchPrints = getPrints();
  const [session, prints] = await Promise.all([fetchSession, fetchPrints]);
  if (!session) {
    return {
      props: {
        prints: prints,
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
      prints: prints,
      initializeCart: cart
    }
  }
}