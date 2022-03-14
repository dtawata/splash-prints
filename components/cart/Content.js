import styles from '../../styles/cart/Content.module.css';
import { Fragment } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Content = (props) => {
  const { cart, setCart } = props;
  const cartArr = Object.keys(cart).map((item) => {
    cart[item]['key'] = item;
    return cart[item];
  });


  const changeQty = (e, key) => {
    const qty = Number(e.target.value);
    const update = Object.assign({}, cart);
    update[key]['qty'] = qty;
    setCart(update);
  };

  const changeSize = (e, key) => {
    const id = cart[key]['id'];
    const qty = cart[key]['qty'];
    const newSize = e.target.value;
    const newKey = `${id}_${newSize}`;
    const update = Object.assign({}, cart);
    if (update[newKey]) {
      update[newKey]['qty'] = update[newKey]['qty'] + qty;
      delete update[key];
    } else {
      update[newKey] = update[key];
      update[newKey]['key'] = `${id}_${newSize}`;
      update[newKey]['price'] = update[newKey][`price_${newSize}`];
      update[newKey]['size'] = newSize;
      delete update[key];
    }
    setCart(update);
  };

  const removeItem = (key) => {
    const update = Object.assign({}, cart);
    delete update[key];
    setCart(update);
  };

  return (
    <div className={styles.content}>
      <div className={styles.cartTitle}>Your Cart</div>
      <div className={styles.items}>
        {cartArr.map((item, index) => {
          return <Item key={item.key} item={item} changeSize={changeSize} changeQty={changeQty} removeItem={removeItem} />
        })}
      </div>
    </div>
  );
};

const Item = (props) => {
  const { item, changeQty, changeSize, removeItem } = props;

  return (
    <div className={styles.item}>
      <div className={styles.print}>
        <Image src={props.item.src} alt={'hello'} width={200} height={240} />
      </div>
      <div className={styles.printDetails}>
        <div className={styles.printName}>{props.item.title}</div>
        <div className={styles.flex}>
          <div className={styles.selectors}>
            <div className={styles.qty}>
              <div className={styles.qtyTitle}>Quantity:</div>
              <select onChange={(e) => { changeQty(e, item.key); }} value={item.qty}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, index) => {
                  return <QtyOptions key={index} val={val} />
                })}
              </select>
            </div>
            <div className={styles.size}>
              <div className={styles.sizeTitle}>Size:</div>
              <select onChange={(e) => { changeSize(e, item.key); }} value={item.size}>
                <option value="medium">M</option>
                <option value="large">L</option>
              </select>
            </div>
          </div>
          <div className={styles.price}>
            <div className={styles.itemLabel}>Price:</div>
            <div className={styles.itemPrice}>${item.qty * item.price}</div>
          </div>
        </div>
      </div>
      <div onClick={() => { removeItem(item.key); }} className={styles.remove}>
        <FontAwesomeIcon icon={faX} className={styles.icon} />
      </div>
    </div>
  );
};

const QtyOptions = (props) => {
  return (
    <option value={props.val}>{props.val}</option>
  );
}

export default Content;