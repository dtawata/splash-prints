import styles from '../styles/Home.module.css'
import HomeGallery from '../components/HomeGallery';
import { getPrints } from '../lib/db.js';

const Home = (props) => {
  return (
    <div className={styles.home}>
      <HomeGallery prints={props.prints} />
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