import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Link href='/' passHref>
        <div className={styles.logo}>Design</div>
      </Link>
      <nav>
        <ul>
          <li>Featured</li>
          <li>Second</li>
          <li>Third</li>
          <li>Fourth</li>
          <li>Fifth</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;