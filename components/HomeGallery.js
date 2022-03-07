import styles from '../styles/HomeGallery.module.css';
import Image from 'next/image';
import Link from 'next/link';

const HomeGallery = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.homeGallery}>
        {props.prints.map((print, index) => {
          return <HomeThumbnail key={index} print={print} />
        })}
      </div>
    </div>
  );
};

const HomeThumbnail = (props) => {
  return (
    <Link href={`/prints/${props.print.path}/${props.print.id}`} passHref>
      <div className={styles.thumbnail}>
        <Image src={props.print.src} alt={props.print.alt} width={550} height={650} />
        <div className={styles.text}>By {props.print.artist}</div>
      </div>
    </Link>
  );
};

export default HomeGallery;