import styles from '../../styles/Prints.module.css';
import { useState, useRef, Fragment } from 'react';
import Added from '../../components/prints/Added';
import Thumbnails from '../../components/prints/Thumbnails';
import Gallery from '../../components/prints/Gallery';
import Details from '../../components/prints/Details';
import { getCollection } from '../../lib/db.js';

const Prints = (props) => {
  const { cart, setCart, collection } = props;
  const [selected, setSelected] = useState(props.selected);
  const recent = useRef(false);

  return (
    <div className={styles.prints}>
      {recent.current ? <Added /> :
        <Fragment>
          <Thumbnails collection={collection} setSelected={setSelected} />
          <Gallery selected={selected} />
          <Details collection={collection} selected={selected} setSelected={setSelected} cart={cart} setCart={setCart} recent={recent} />
        </Fragment>}
    </div>
  );
};

export default Prints;

export const getServerSideProps = async (context) => {
  const path = context.params.path;
  const collection = await getCollection(path[0]);
  let id = 0;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].id.toString() === path[1]) {
      id = i;
      break;
    }
  }
  const selected = collection[id];

  return {
    props: {
      collection: collection,
      selected: selected
    }
  }
}