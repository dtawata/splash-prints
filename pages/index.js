import styles from '../styles/Home.module.css'
import HomeGallery from '../components/HomeGallery';

const Home = (props) => {
  return (
    <div className={styles.home}>
      <HomeGallery />
    </div>
  );
};

export default Home;