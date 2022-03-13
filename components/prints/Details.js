import styles from '../../styles/prints/Details.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faUnsplash, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react';

const Details = (props) => {
  const { cart, setCart, selected, collection } = props;
  const [size, setSize] = useState('medium');

  const addToCart = () => {
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
      <div className={styles.title}>Midnight Train</div>
      <div className={styles.author}>By Adam Borkowski</div>
      <div className={styles.price}>$44</div>
      <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi eveniet qui corrupti dolorum repudiandae, harum velit fuga et atque quam labore facere, deleniti rem illum dignissimos quis cumque eius!</div>
      <div className={styles.sizeTitle}>Select Size:</div>
      <div className={styles.sizes}>
        <div onClick={() => { changeSize('medium'); }} className={sizeM}>
          <div className={styles.sizeAbbreviation}>M</div>
          <div className={styles.sizeMeasurements}>17.7'' / 12.6''</div>
        </div>
        <div onClick={() => { changeSize('large'); }} className={sizeL}>
          <div className={styles.sizeAbbreviation}>L</div>
          <div className={styles.sizeMeasurements}>26.6'' / 18.9''</div>
        </div>
      </div>
      <div className={styles.printTitle}>
        <div className={styles.printTitlePrint}>Print</div>
        <div className={styles.printTitleIcon}><FontAwesomeIcon icon={faChevronRight} /></div>
        <div className={styles.printTitleName}>Midnight Train</div>
      </div>
      <div className={styles.prints}>
        {collection.map((print, index) => {
          return <MiniPrint print={print} key={index} />
        })}
      </div>
      <button onClick={addToCart} className={styles.button}>Add to Cart</button>
      <div className={styles.social}>
        <a href={selected.unsplash} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faUnsplash} />
        </a>
        <a href={selected.instagram} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
};

const Size = (props) => {
  return (
    <div>
      <div className={`${styles.size} ${styles.active}`}>
        <div className={styles.sizeAbbreviation}>M</div>
        <div className={styles.sizeMeasurements}>17.7'' / 12.6''</div>
      </div>
      <div className={styles.size}>
        <div className={styles.sizeAbbreviation}>L</div>
        <div className={styles.sizeMeasurements}>26.6'' / 18.9''</div>
      </div>
    </div>
  )
}

const MiniPrint = (props) => {
  return (
    <div className={styles.print}>
      <Image src={props.print.src} alt={'something'} width={50} height={50} layout={'responsive'} />
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faCheck} />
      </div>
    </div>
  );
};

export default Details;