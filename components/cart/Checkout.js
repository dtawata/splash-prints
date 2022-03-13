import styles from '../../styles/cart/Checkout.module.css';
import Image from 'next/image';

const Checkout = (props) => {
  const { cart } = props;

  let itemTotal = 0;
  for (let key in cart) {
    itemTotal += cart[key]['price'] * cart[key]['qty'];
  }
  let shipping = 10;
  if (itemTotal > 50) {
    shipping = 0;
  }
  let total = itemTotal + shipping;

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
            <div>${itemTotal}</div>
          </div>
          <div className={styles.line}>
            <div>Shipping & handling:</div>
            <div>${shipping}</div>
          </div>
        </div>
        <div className={styles.total}>
          <div className={styles.totalLabel}>Order total:</div>
          <div className={styles.totalValue}>${total}</div>
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
