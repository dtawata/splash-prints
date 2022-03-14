import styles from '../../styles/cart/Empty.module.css';
import Link from 'next/link';

const Empty = (props) => {
  return (
    <div className={styles.empty}>
      <div className={styles.title}><strong>Hmmm...</strong> it looks like your cart is empty</div>
      <div className={styles.cta}>Check out our latest prints!</div>
      <Link href="/" passHref>
        <button className={styles.button}>Shop Now</button>
      </Link>
    </div>
  );
};

export default Empty;