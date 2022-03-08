import styles from '../../styles/home/Gallery.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Gallery = (props) => {
  return (
    <div className={styles.gallery}>
      <div className={styles.title}>Check Out Our Latest Prints!</div>
      <div className={styles.homeGallery}>
        {props.prints.map((print, index) => {
          return <Print key={index} print={print} />
        })}
      </div>
    </div>
  );
};

const Print = (props) => {
  return (
    <Link href={`/prints/${props.print.path}/${props.print.id}`} passHref>
      <div className={styles.thumbnail}>
        <Image src={props.print.src} alt={props.print.alt} width={550} height={650} />
        <div className={styles.text}>By {props.print.artist}</div>
      </div>
    </Link>
  );
};

export default Gallery;