import styles from '../../styles/Cart.module.css';
import { Fragment } from 'react';
import Content from '../../components/cart/Content';
import Checkout from '../../components/cart/Checkout';
import Empty from '../../components/cart/Empty';
import { getSession } from 'next-auth/client';
import { getCart } from '../../lib/db.js';

const Cart = (props) => {
  const { isLoggedIn, cart } = props;

  return (
    <div className={styles.cart}>
      {Object.keys(cart).length > 0 ?
        <Fragment>
          <Content cart={cart} isLoggedIn={isLoggedIn} />
          <Checkout cart={cart} />
        </Fragment> :
        <Empty />}
    </div>
  );
};

export default Cart;

export const getServerSideProps = async (context) => {

  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      props: {
        isLoggedIn: false,
        initial: {}
      }
    }
  }
  const email = session.user.email;
  const initialize = await getCart(email);
  const cart = initialize.reduce((accumulator, item) => {
    accumulator[item.obj_key] = item;
    return accumulator;
  }, {});

  return {
    props: {
      isLoggedIn: true,
      initial: cart
    }
  }
}