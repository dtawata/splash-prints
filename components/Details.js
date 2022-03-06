import styles from '../styles/Details.module.css';

const Details = (props) => {
  return (
    <div className={styles.details}>
      <div className={styles.title}>Midnight Train</div>
      <div className={styles.by}>By Adam Borkowski</div>
    </div>
  );
};

export default Details;