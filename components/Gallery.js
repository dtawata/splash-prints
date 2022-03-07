import styles from '../styles/Gallery.module.css';
import Image from 'next/image';

const Gallery = (props) => {
  return (
    <div className={styles.gallery}>
      <Image src={props.print.src} alt={'hello'} width={550} height={650} layout={'responsive'} />
    </div>
  );
};

export default Gallery;