import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSession, signOut } from 'next-auth/client';

const Header = (props) => {
  const { cart } = props;
  const qty = Object.keys(cart).reduce((accumulator, item) => {
    return accumulator + cart[item].qty;
  }, 0);
  const [session, loading] = useSession();

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
      <div className={styles.right}>
        <Link href="/cart" passHref>
          <div className={styles.cart}>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon icon={faCartShopping} className={styles.icon} flip="horizontal" />
              {qty > 0 && <div className={styles.qty}>{qty}</div>}
            </div>
            <div>Cart</div>
          </div>
        </Link>
        {session ? <div onClick={signOut} className={styles.login}>Logout</div> :
          <Link href="/login" passHref>
            <div className={styles.login}>Login</div>
          </Link>}
      </div>
    </header>
  );
};

export default Header;