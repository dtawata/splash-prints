import styles from '../../styles/Prints.module.css';
import Gallery from '../../components/prints/Gallery';
import Details from '../../components/prints/Details';
import Thumbnails from '../../components/prints/Thumbnails';

import { getPrint } from '../../lib/db.js';

const PrintsById = (props) => {
  return (
    <div className={styles.prints}>
      <Thumbnails collection={props.collection} />
      <Gallery print={props.print} />
      <Details collection={props.collection} />
    </div>
  );
};

export default PrintsById;

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const data = await getPrint(id);

  return {
    props: {
      print: data[0],
      collection: [
        {
          src: '/img/anthony-delanoix-C16xHin1f7A-unsplash.jpg'
        },
        {
          src: '/img/anthony-delanoix-o0pifdpvJ_o-unsplash.jpg'
        },
        {
          src: '/img/anthony-delanoix-vjwkQsqatCM-unsplash.jpg'
        },
        {
          src: '/img/anthony-delanoix-1lE3-DUBr_I-unsplash.jpg'
        }
      ]
    }
  }
}


// export const getServerSideProps = async (context) => {
//   return {
//     props: {

//     }
//   }
// };