import styles from '../../styles/cart/Content.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useRouter } from 'next/router';


const Content = (props) => {
  const { isLoggedIn, cart } = props;
  const router = useRouter();
  const cartArr = Object.keys(cart).map((item) => {
    return cart[item];
  });

  const changeQty = async (e, item) => {
    const { id, obj_key } = item;
    const qty = Number(e.target.value);
    if (isLoggedIn) {
      const body = { id: id, qty: qty }
      const res = await axios.put('http://localhost:3000/api/cart/update', body);
    } else {
      const update = Object.assign({}, cart);
      update[obj_key]['qty'] = qty;
      localStorage.setItem('cart', JSON.stringify(update));
    }
    router.replace(router.asPath);
  };

  const changeSize = async (e, item) => {
    const { id, obj_key, qty, print_id } = item;
    const newSize = e.target.value;
    const newKey = `${print_id}_${newSize}`;
    if (isLoggedIn) {
      if (cart[newKey]) {
        const newQty = qty + cart[newKey].qty;
        const newId = cart[newKey].id;
        const body = { id: newId, qty: newQty };
        const res = await axios.put('http://localhost:3000/api/cart/update', body);
      } else {
        const newItem = {};
        newItem.print_id = print_id;
        newItem.qty = qty;
        newItem.size = newSize;
        newItem.obj_key = newKey;
        newItem.price = item[`price_${newSize}`];
        const res = await axios.post('http://localhost:3000/api/cart/add', newItem);
      }
      const body = { id: id };
      const res = await axios.post('http://localhost:3000/api/cart/delete', body);
    } else {
      const newSize = e.target.value;
      const newKey = `${print_id}_${newSize}`;
      const update = Object.assign({}, cart);
      if (update[newKey]) {
        let item = update[newKey];
        item.qty = item.qty + qty;
        delete update[obj_key];
      } else {
        update[newKey] = update[obj_key];
        update[newKey]['obj_key'] = `${print_id}_${newSize}`;
        update[newKey]['price'] = update[newKey][`price_${newSize}`];
        update[newKey]['size'] = newSize;
      }
      delete update[obj_key];
      localStorage.setItem('cart', JSON.stringify(update));
    }
    router.replace(router.asPath);
  };

  const removeItem = async (item) => {
    const { id, obj_key } = item;
    if (isLoggedIn) {
      const body = { id: id };
      const res = await axios.post('http://localhost:3000/api/cart/delete', body);
    } else {
      const update = Object.assign({}, cart);
      delete update[obj_key];
      localStorage.setItem('cart', JSON.stringify(update));
    }
    router.replace(router.asPath);
  };

  return (
    <div className={styles.content}>
      <div className={styles.cartTitle}>Your Cart</div>
      <div className={styles.items}>
        {cartArr.map((item) => {
          return <Item key={item.obj_key} item={item} changeSize={changeSize} changeQty={changeQty} removeItem={removeItem} />
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
        <Image src={item.src} alt={item.alt} width={200} height={240} />
      </div>
      <div className={styles.printDetails}>
        <div className={styles.printName}>{item.title}</div>
        <div className={styles.flex}>
          <div className={styles.selectors}>
            <div className={styles.qty}>
              <div className={styles.qtyTitle}>Quantity:</div>
              <select onChange={(e) => { changeQty(e, item); }} value={item.qty}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, index) => {
                  return <QtyOptions key={index} val={val} />
                })}
              </select>
            </div>
            <div className={styles.size}>
              <div className={styles.sizeTitle}>Size:</div>
              <select onChange={(e) => { changeSize(e, item); }} value={item.size}>
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
      <div onClick={() => { removeItem(item); }} className={styles.remove}>
        <FontAwesomeIcon icon={faX} className={styles.icon} />
      </div>
    </div>
  );
};

const QtyOptions = (props) => {
  const { val } = props;

  return (
    <option value={val}>{val}</option>
  );
}

export default Content;