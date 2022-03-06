import styles from '../styles/Container.module.css';
import Header from './Header';

const Container = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      {props.children}
    </div>
  );
};

export default Container;