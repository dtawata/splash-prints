import { useEffect } from 'react';
import styles from '../../styles/Cart.module.css';
import axios from 'axios';
import Content from '../../components/cart/Content';
import Checkout from '../../components/cart/Checkout';
import { useState } from 'react';

const Cart = (props) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/print', {
      params: {
        id: props.cart
      }
    })
      .then((res) => {
        setContent(res.data);
      })
  }, [props.cart])

  return (
    <div className={styles.cart}>
      <Content content={content} />
      <Checkout />
    </div>
  );
};

export default Cart;