import styles from '../../styles/Prints.module.css';
import { useState } from 'react';
import Thumbnails from '../../components/prints/Thumbnails';
import Gallery from '../../components/prints/Gallery';
import Details from '../../components/prints/Details';
import { getCollection } from '../../lib/db.js';
// import { getCollection } from '../../lib/db.js';

const Prints = (props) => {
  const { cart, setCart, collection } = props;
  const [selected, setSelected] = useState(props.selected);

  console.log(collection);

  return (
    <div className={styles.prints}>
      <Thumbnails collection={collection} setSelected={setSelected} />
      <Gallery selected={selected} />
      <Details collection={collection} selected={selected} setSelected={setSelected} cart={cart} setCart={setCart} />
    </div>
  );
};

export default Prints;

export const getStaticProps = async (context) => {
  const collection = await getCollection('adam-borkowski');
  // const collection = await getCollection(path[0]);
  // let id = 0;
  // for (let i = 0; i < collection.length; i++) {
  //   if (collection[i].id.toString() === path[1]) {
  //     id = i;
  //     break;
  //   }
  // }
  const selected = collection[0];

  return {
    props: {
      collection: collection,
      selected: selected
    }
  }
}