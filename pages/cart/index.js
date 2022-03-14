import styles from '../../styles/Cart.module.css';
import { Fragment } from 'react';
import Content from '../../components/cart/Content';
import Checkout from '../../components/cart/Checkout';
import Empty from '../../components/cart/Empty';

const Cart = (props) => {
  const {cart, setCart} = props;
  console.log(cart);
  return (
    <div className={styles.cart}>
      {Object.keys(cart).length > 0 ?
        <Fragment>
          <Content cart={cart} setCart={setCart} />
          <Checkout cart={cart} />
        </Fragment> :
        <Empty />
      }
    </div>
  );
};

export default Cart;