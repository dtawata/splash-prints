import styles from '../styles/Container.module.css';
import Header from './Header';

const Container = (props) => {
  const { isLoggedIn, cart } = props;

  return (
    <div className={styles.container}>
      <Header isLoggedIn={isLoggedIn} cart={cart} />
      <main>{props.children}</main>
    </div>
  );
};

export default Container;