import styles from '../styles/Container.module.css';
import Header from './Header';

const Container = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{props.children}</main>
    </div>
  );
};

export default Container;