import styles from '../styles/HomeGallery.module.css';
import Image from 'next/image';
import Link from 'next/link';

const HomeGallery = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.homeGallery}>
        <Link href="/prints">
          <div className={styles.thumbnail}>
            <Image src="/img/adam-borkowski-SJeH7eDgfnU-unsplash.jpg" alt={'hello'} width={550} height={650} />
            <div className={styles.text}>By Adam Borkowski</div>
          </div>
        </Link>
        <Link href="/prints">
          <div className={styles.thumbnail}>
            <Image src="/img/artem-shuba-GYSiH1N6pxE-unsplash.jpg" alt={'hello'} width={550} height={650} />
            <div className={styles.text}>By Adam Borkowski</div>
          </div>
        </Link>
        <div className={styles.thumbnail}>
          <Image src="/img/kevin-wong-D6Uj3I0zMaU-unsplash.jpg" alt={'hello'} width={550} height={650} layout={'responsive'} />
          <div className={styles.text}>By Adam Borkowski</div>
        </div>
        <div className={styles.thumbnail}>
          <Image src="/img/kevin-wong-D6Uj3I0zMaU-unsplash.jpg" alt={'hello'} width={550} height={650} layout={'responsive'} />
          <div className={styles.text}>By Adam Borkowski</div>
        </div>
        <div className={styles.thumbnail}>
          <Image src="/img/adam-borkowski-SJeH7eDgfnU-unsplash.jpg" alt={'hello'} width={550} height={650} />
          <div className={styles.text}>By Adam Borkowski</div>
        </div>
        <div className={styles.thumbnail}>
          <Image src="/img/artem-shuba-GYSiH1N6pxE-unsplash.jpg" alt={'hello'} width={550} height={650} />
        </div>
        <div className={styles.thumbnail}>
          <Image src="/img/kevin-wong-D6Uj3I0zMaU-unsplash.jpg" alt={'hello'} width={550} height={650} layout={'responsive'} />
        </div>
        <div className={styles.thumbnail}>
          <Image src="/img/kevin-wong-D6Uj3I0zMaU-unsplash.jpg" alt={'hello'} width={550} height={650} layout={'responsive'} />
        </div>
        {/* {[1, 2, 3].map((thumbnail, index) => {
          return <HomeThumbnail key={index} />
        })} */}
      </div>
    </div>
  );
};

const HomeThumbnail = (props) => {
  return (
    <div className={styles.thumbnail}>
      <Image src="/img/adam-borkowski-SJeH7eDgfnU-unsplash.jpg" alt={'hello'} width={550} height={650} layout={'responsive'} />
      <Image src="/img/artem-shuba-GYSiH1N6pxE-unsplash.jpg" alt={'hello'} width={550} height={650} layout={'responsive'} />
    </div>
  );
};

export default HomeGallery;