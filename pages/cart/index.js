import styles from '../../styles/Cart.module.css';
import Content from '../../components/cart/Content';
import Checkout from '../../components/cart/Checkout';

const Cart = (props) => {
  return (
    <div className={styles.cart}>
      <Content />
      <Checkout />
    </div>
  );
};

export default Cart;