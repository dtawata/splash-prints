import styles from '../../styles/cart/Checkout.module.css';
import Image from 'next/image';

const Checkout = (props) => {
  return (
    <div className={styles.checkout}>
      <div className={styles.details}>
        <div className={styles.detailsTitle}>Order Details</div>
        <div className={styles.lines}>
          <div className={styles.line}>
            <div>Ship to:</div>
            <div>United States</div>
          </div>
          <div className={styles.line}>
            <div>Item total:</div>
            <div>$44.05</div>
          </div>
          <div className={styles.line}>
            <div>Shipping & handling:</div>
            <div>$10.00</div>
          </div>
        </div>
        <div className={styles.total}>
          <div className={styles.totalLabel}>Order total:</div>
          <div className={styles.totalValue}>$120</div>
        </div>
        <button className={styles.button}>Checkout</button>
        <div className={styles.payment}>
          <Image src="/img/payments.png" alt={'payment badges'} width={200} height={40} layout={'responsive'} />
        </div>
        <div className={styles.secured}>Transaction secured by <strong>PayPal</strong>, <strong>Braintree</strong> or <strong>Adyen</strong></div>
      </div>
    </div>
  );
};

export default Checkout;
