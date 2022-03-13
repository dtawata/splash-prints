import styles from '../../styles/prints/Gallery.module.css';
import Image from 'next/image';

const Gallery = (props) => {
  const { selected } = props;

  return (
    <div className={styles.gallery}>
      <Image src={selected.src} alt={selected.alt} width={550} height={650} />
    </div>
  );
};

export default Gallery;