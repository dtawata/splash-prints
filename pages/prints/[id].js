import styles from '../../styles/Prints.module.css';
import Gallery from '../../components/Gallery';
import Details from '../../components/Details';
import { getPrint } from '../../lib/db.js';

const PrintId = (props) => {
  console.log(props);
  return (
    <div className={styles.prints}>
      <Gallery print={props.print} />
      <Details />
    </div>
  );
};

export default PrintId;

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const data = await getPrint(id);

  return {
    props: {
      print: data[0]
    }
  }
}