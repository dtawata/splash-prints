import styles from '../../styles/Prints.module.css';
import Gallery from '../../components/prints/Gallery';
import Details from '../../components/prints/Details';
import { getPrints } from '../../lib/db.js';

const Prints = (props) => {
  return (
    <div className={styles.prints}>
      <Gallery />
      <Details />
      {props.prints[0].author}
    </div>
  );
};

export default Prints;

export const getServerSideProps = async () => {
  const data = await getPrints();
  return {
    props: {
      prints: data
    }
  }
};