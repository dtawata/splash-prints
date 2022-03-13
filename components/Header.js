import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <div className={styles.logo}>Penguin Prints</div>
      </Link>
      <nav>
        <ul>
          <Link href="/" passHref>
            <li>Home</li>
          </Link>
          <li>Featured</li>
          <li>Favorites</li>
          <li>Fourth</li>
          <li>Fifth</li>
        </ul>
      </nav>
      <Link href="/cart" passHref>
        <div className={styles.cart}>Cart</div>
      </Link>
    </header>
  );
};

export default Header;