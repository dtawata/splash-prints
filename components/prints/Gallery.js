import styles from '../../styles/prints/Gallery.module.css';
import Image from 'next/image';

const Gallery = (props) => {
  return (
    <div className={styles.gallery}>
      <Image src={props.selected.src} alt={props.selected.alt} width={550} height={650} layout={'responsive'} />
    </div>
  );
};

export default Gallery;