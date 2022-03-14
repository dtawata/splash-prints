import styles from '../../styles/prints/Added.module.css';
import Link from 'next/link';

const Added = (props) => {
  return (
    <div className={styles.added}>
      <div className={styles.title}>Item successfully added to the cart!</div>
      <div className={styles.options}>
        <Link href='/' passHref>
          <button className={styles.button}>Continue Shopping</button>
        </Link>
        <div className={styles.or}>OR</div>
        <Link href='/cart' passHref>
          <button className={styles.button}>Proceed to Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default Added;