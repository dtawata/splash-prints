import styles from '../../styles/prints/Details.module.css';
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUnsplash, faInstagram } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios';
import { useRouter } from 'next/router';

const Details = (props) => {
  const { isLoggedIn, cart, selected, setSelected, collection, recent, favorites } = props;
  const [size, setSize] = useState('medium');
  const router = useRouter();

  const updateCart = async () => {
    if (isLoggedIn) {
      const update = Object.assign({}, cart);
      const obj_key = `${selected.id}_${size}`;
      if (update[obj_key]) {
        const item = update[obj_key];
        item.qty++;
        if (item.qty > 10) {
          item.qty = 10;
        }
        const body = { id: item.id, qty: item.qty }
        const res = await axios.put('http://localhost:3000/api/cart/update', body);
      } else {
        update[obj_key] = Object.assign({}, selected);
        const item = update[obj_key];
        item.print_id = selected.id;
        item.qty = 1;
        item.price = item[`price_${size}`];
        item.size = size;
        item.obj_key = obj_key;
        const res = await axios.post('http://localhost:3000/api/cart/add', item);
        if (res.data) {
          item.id = res.data.insertId;
        }
      }
      recent.current = true;
      router.replace(router.asPath);
    } else {
      const update = Object.assign({}, cart);
      const obj_key = `${selected.id}_${size}`;
      if (update[obj_key]) {
        const item = update[obj_key];
        item.qty++;
        if (item.qty > 10) {
          item.qty = 10;
        }
      } else {
        update[obj_key] = Object.assign({}, selected);
        const item = update[obj_key];
        item.print_id = selected.id;
        item.qty = 1;
        item.price = item[`price_${size}`];
        item.size = size;
        item.obj_key = obj_key;
      }
      localStorage.setItem('cart', JSON.stringify(update));
      recent.current = true;
      router.replace(router.asPath);
    }
  }

  const changeSize = (clickedSize) => {
    if (clickedSize === size) {
      return;
    } else {
      setSize(clickedSize);
    }
  }

  const updateFavorites = async () => {
    if (!isLoggedIn) {
      alert('Make an account to save your favorite prints!');
      return;
    }
    if (favorites[selected.id]) {
      const body = {
        id: favorites[selected.id].id
      }
      const res = await axios.post('http://localhost:3000/api/favorites/delete', body);
    } else {
      const price = selected[`price_${size}`];
      const body = {
        print_id: selected.id,
        price: price,
        size: size
      }
      const res = await axios.post('http://localhost:3000/api/favorites/add', body);
    }
    const index = router.asPath.lastIndexOf('/');
    router.replace(router.asPath.slice(0, index + 1) + selected.id);


//     | id       | int          | NO   | PRI | NULL    | auto_increment |
// | email    | varchar(255) | NO   |     | NULL    |                |
// | print_id | int          | NO   |     | NULL    |                |
// | obj_key  | varchar(255) | YES  |     | NULL    |                |
// | price    | int          | YES  |     | NULL    |                |
// | qty      | int          | YES  |     | NULL    |                |
// | size     | varchar(255) | YES  |     | NULL    |

  }

  let sizeM, sizeL;
  if (size === 'medium') {
    sizeM = `${styles.size} ${styles.active}`;
    sizeL = `${styles.size}`;
  } else {
    sizeM = `${styles.size}`;
    sizeL = `${styles.size} ${styles.active}`;
  }

  let heartStyles;
  if (favorites[selected.id]) {
    heartStyles = `${styles.heart} ${styles.active}`;
  } else {
    heartStyles = `${styles.heart}`;
  }

  return (
    <div className={styles.details}>
      <div className={styles.title}>{selected.title}</div>
      <div className={styles.artist}>By {selected.artist}</div>
      <div className={styles.price}>${size === 'medium' ? selected.price_medium : selected.price_large}</div>
      <div className={styles.description}>{selected.description}</div>
      <div className={styles.sizeTitle}>Select Size:</div>
      <div className={styles.sizes}>
        <div onClick={() => { changeSize('medium'); }} className={sizeM}>
          <div className={styles.sizeAbbreviation}>M</div>
          <div className={styles.sizeMeasurements}>17.7&#39;&#39; / 12.6&#39;&#39;</div>
        </div>
        <div onClick={() => { changeSize('large'); }} className={sizeL}>
          <div className={styles.sizeAbbreviation}>L</div>
          <div className={styles.sizeMeasurements}>26.6&#39;&#39; / 18.9&#39;&#39;</div>
        </div>
      </div>
      <div className={styles.sizeTitle}>Select from the <strong>{selected.artist}</strong> collection:</div>
      <div className={styles.prints}>
        {collection.map((print) => {
          return <Print key={print.id} print={print} selected={selected} setSelected={setSelected} />
        })}
      </div>
      <div className={styles.flex}>
        <button onClick={updateCart} className={styles.button}>Add to Cart</button>
        <button onClick={updateFavorites} className={styles.favorite}><FontAwesomeIcon icon={faHeart} className={heartStyles} /></button>
      </div>

      <div className={styles.sizeTitle}>Check out more of <strong>{selected.artist}</strong>&#39;s work at:</div>
      <div className={styles.social}>
        <a href={selected.unsplash} target="_blank" rel="noreferrer">
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faUnsplash} />
          </div>
        </a>
        <a href={selected.instagram} target="_blank" rel="noreferrer">
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </a>
      </div>
    </div>
  );
};

const Print = (props) => {
  const { print, selected, setSelected } = props;

  return (
    <div className={styles.print} onClick={() => { setSelected(print); }}>
      <Image src={print.src} alt={print.alt} width={100} height={100} />
      {print.id === selected.id ? <div className={styles.check}>
        <FontAwesomeIcon icon={faCheck} />
      </div> : null}
    </div>
  );
};

export default Details;