import styles from '../styles/Header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Design</div>
      <nav>
        <ul>
          <li>First</li>
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