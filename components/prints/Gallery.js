import styles from '../../styles/Gallery.module.css';
import Image from 'next/image';

const Gallery = (props) => {
  return (
    <div className={styles.gallery}>
      <Image src={props.selected.src} alt={'hello'} width={500} height={600} layout={'responsive'} />
    </div>
  );
};

export default Gallery;