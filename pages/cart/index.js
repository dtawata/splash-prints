import styles from '../../styles/Cart.module.css';
import { Fragment } from 'react';
import Content from '../../components/cart/Content';
import Checkout from '../../components/cart/Checkout';
import Empty from '../../components/cart/Empty';
import { getSession } from 'next-auth/client';
import { getCart } from '../../lib/db.js';

const Cart = (props) => {
  const {cart, setCart} = props;

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

export const getServerSideProps = async (context) => {

  const session = await getSession({ req: context.req });
  const email = session.user.email;
  const initialize = await getCart(email);
  const cart = initialize.reduce((accumulator, item) => {
    accumulator[item.obj_key] = item;
    return accumulator;
  }, {});


  // const session = await getSession({ req: context.req });
  // const email = session.user.email;
  // // console.log('session', email);
  // const cart = await getCart(email);
  // console.log('first', cart);
  // const ids = cart.map((item) => {
  //   return item.print_id;
  // });
  // console.log('ids', ids);
  // const cartContent = await getCartContent(ids);
  // console.log('cart', cartContent);

  return {
    props: {
      initializeCart: cart
    }
  }
}