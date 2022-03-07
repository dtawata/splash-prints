import styles from '../../styles/Thumbnails.module.css';
import Image from 'next/image';

const Thumbnails = (props) => {
  return (
    <div className={styles.thumbnails}>
      {props.collection.map((item, index) => {
        return <Thumbnail item={item} key={index} />
      })}
    </div>
  )
}

const Thumbnail = (props) => {
  return (
    <div className={styles.thumbnail}>
      <Image src={props.item.src} alt={'something meaningful'} width={50} height={50} layout={'responsive'} />
    </div>
  );
};

export default Thumbnails;
