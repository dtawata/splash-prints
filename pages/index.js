import styles from '../styles/Home.module.css'
import Gallery from '../components/home/Gallery';
import { getPrints, getCart } from '../lib/db.js';
import { getSession } from 'next-auth/client';

const Home = (props) => {
  const { prints } = props;

  return (
    <div className={styles.home}>
      <Gallery prints={prints} />
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
        isLoggedIn: false,
        prints: prints,
        cart: {}
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
      prints: prints,
      cart: cart
    }
  }
}