import styles from '../styles/Container.module.css';
import Header from './Header';

const Container = (props) => {
  const { cart } = props;

  return (
    <div className={styles.container}>
      <Header cart={cart} />
      <main>{props.children}</main>
    </div>
  );
};

export default Container;