import styles from '../../styles/prints/Thumbnails.module.css';
import Image from 'next/image';

const Thumbnails = (props) => {
  const { collection, setSelected } = props;

  return (
    <div className={styles.thumbnails}>
      {collection.map((print, index) => {
        return <Thumbnail key={print.id} print={print} setSelected={setSelected} />
      })}
    </div>
  );
};

const Thumbnail = (props) => {
  const { print, setSelected } = props;
  return (
    <div className={styles.thumbnail} onClick={() => {setSelected(print); }}>
      <Image src={print.src} alt={print.alt} width={150} height={150} />
    </div>
  );
};

export default Thumbnails;
