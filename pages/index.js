import styles from '../styles/Home.module.css'
import Gallery from '../components/home/Gallery';
import { getPrints } from '../lib/db.js';

const Home = (props) => {
  return (
    <div className={styles.home}>
      <Gallery prints={props.prints} />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {

  const data = await getPrints();

  return {
    props: {
      prints: data
    }
  }
}