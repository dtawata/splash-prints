import styles from '../../styles/cart/Content.module.css';
import Image from 'next/image';

const Content = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.cartTitle}>Your Cart</div>
      <div className={styles.items}>
        {props.content.map((item, index) => {
          return <Item item={item} key={index} />
        })}
      </div>
    </div>
  );
};

const Item = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.print}>
        <Image src={props.item.src} alt={'hello'} width={500} height={600} layout={'responsive'} />
      </div>
      <div className={styles.printDetails}>
        <div className={styles.printName}>Cityscape Collection</div>
        <div className={styles.flex}>
          <div className={styles.selectors}>
            <div className={styles.qty}>
              <div className={styles.qtyTitle}>Quantity:</div>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div className={styles.size}>
              <div className={styles.sizeTitle}>Size:</div>
              <select>
                <option>M</option>
                <option>L</option>
              </select>
            </div>
          </div>
          <div className={styles.price}>
            <div className={styles.itemLabel}>Price:</div>
            <div className={styles.itemPrice}>$132</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;