import styles from '../../styles/Details.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faUnsplash, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Details = (props) => {
  return (
    <div className={styles.details}>
      <div className={styles.title}>Midnight Train</div>
      <div className={styles.author}>By Adam Borkowski</div>
      <div className={styles.price}>$44</div>
      <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi eveniet qui corrupti dolorum repudiandae, harum velit fuga et atque quam labore facere, deleniti rem illum dignissimos quis cumque eius!</div>
      <div className={styles.sizeTitle}>Select Size:</div>
      <div className={styles.sizes}>
        <div className={styles.size}>
          <div className={styles.sizeAbbreviation}>M</div>
          <div className={styles.sizeMeasurements}>17.7'' / 12.6''</div>
        </div>
        <div className={styles.size}>
          <div className={styles.sizeAbbreviation}>L</div>
          <div className={styles.sizeMeasurements}>26.6'' / 18.9''</div>
        </div>
      </div>
      <div className={styles.printTitle}>
        <div className={styles.printTitlePrint}>Print</div>
        <div className={styles.printTitleIcon}><FontAwesomeIcon icon={faChevronRight} /></div>
        <div className={styles.printTitleName}>Midnight Train</div>
      </div>
      <div className={styles.prints}>
        {props.collection.map((print, index) => {
          return <MiniPrint print={print} key={index} />
        })}
      </div>
    </div>
  );
};

const MiniPrint = (props) => {
  return (
    <div className={styles.print}>
      <Image src={props.print.src} alt={'something'} width={50} height={50} layout={'responsive'} />
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faCheck} />
      </div>
    </div>
  );
};

export default Details;