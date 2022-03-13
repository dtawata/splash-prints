import { useEffect } from 'react';
import styles from '../../styles/Cart.module.css';
import axios from 'axios';
import Content from '../../components/cart/Content';
import Checkout from '../../components/cart/Checkout';
import { useState } from 'react';

const Cart = (props) => {
  const {cart, setCart} = props;
  // const [content, setContent] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/print', {
  //     params: {
  //       id: props.cart
  //     }
  //   })
  //     .then((res) => {
  //       setContent(res.data);
  //     })
  // }, [props.cart])

  // const content = Object.keys(props.cart).map((key) => {
  //   return props.cart[key];
  // });

  return (
    <div className={styles.cart}>
      <Content cart={cart} setCart={setCart} />
      <Checkout cart={cart} />
    </div>
  );
};

export default Cart;