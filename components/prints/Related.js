import styles from '../../styles/prints/Related.module.css';
import Image from 'next/image';

const Related = (props) => {
  const { related } = props;

  return (
    <div className={styles.related}>
      <div className={styles.title}>You might also like</div>
      <div className={styles.flex}>
        {related.map((item) => {
          return <Item key={item.id} item={item} />
        })}
      </div>
    </div>
  );
};

const Item = (props) => {
  const { item } = props;

  return (
    <div className={styles.item}>
      <Image src={item.src} alt={item.alt} width={450} height={500} />
    </div>
  );
};

export default Related;