import styles from '../styles/Gallery.module.css';
import Image from 'next/image';

const Gallery = (props) => {
  return (
    <div className={styles.gallery}>
      <Image src="/img/adam-borkowski-SJeH7eDgfnU-unsplash.jpg" alt={'hello'} width={550} height={650} layout={'responsive'} />
    </div>
  );
};

export default Gallery;