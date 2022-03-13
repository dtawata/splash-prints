import styles from '../../styles/prints/Details.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faUnsplash, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Details = (props) => {
  const { cart, setCart, selected, setSelected, collection, recent } = props;
  const [size, setSize] = useState('medium');

  const updateCart = () => {
    const update = Object.assign({}, cart);
    const key = `${selected.id}_${size}`;
    if (update[key]) {
      update[key]['qty']++;
      if (update[key]['qty'] > 10) {
        update[key]['qty'] = 10;
      }
    } else {
      update[key] = Object.assign({}, selected);
      update[key]['qty'] = 1;
      update[key]['price'] = update[key][`price_${size}`];
      update[key]['size'] = size;
    }
    recent.current = true;
    setCart(update);
  }

  const changeSize = (clickedSize) => {
    if (clickedSize === size) {
      return;
    } else {
      setSize(clickedSize);
    }
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  let sizeM, sizeL;
  if (size === 'medium') {
    sizeM = `${styles.size} ${styles.active}`;
    sizeL = `${styles.size}`;
  } else {
    sizeM = `${styles.size}`;
    sizeL = `${styles.size} ${styles.active}`;
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
      <button onClick={updateCart} className={styles.button}>Add to Cart</button>
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