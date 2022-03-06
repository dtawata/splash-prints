import styles from '../../styles/Prints.module.css';
import Gallery from '../../components/Gallery';
import Details from '../../components/Details';

const Prints = (props) => {
  return (
    <div className={styles.prints}>
      <Gallery />
      <Details />
    </div>
  );
};

export default Prints;