import styles from '../../styles/Prints.module.css';
import { useState, useRef, Fragment, useEffect } from 'react';
import Added from '../../components/prints/Added';
import Thumbnails from '../../components/prints/Thumbnails';
import Gallery from '../../components/prints/Gallery';
import Details from '../../components/prints/Details';
import { getCollection, getCart, getFavorites } from '../../lib/db.js';
import { getSession } from 'next-auth/client';

const Prints = (props) => {
  const { isLoggedIn, cart, collection, favorites } = props;
  const [selected, setSelected] = useState(props.selected);
  const recent = useRef(false);

  useEffect(() => {
    setSelected(props.selected);
  }, [props.selected])

  return (
    <div className={styles.prints}>
      {recent.current ? <Added /> :
        <Fragment>
          <Thumbnails collection={collection} setSelected={setSelected} />
          <Gallery selected={selected} />
          <Details collection={collection} selected={selected} setSelected={setSelected} cart={cart} isLoggedIn={isLoggedIn} recent={recent} favorites={favorites} />
        </Fragment>}
    </div>
  );
};

export default Prints;

export const getServerSideProps = async (context) => {
  const path = context.params.path;
  const fetchSession = getSession({ req: context.req });
  const fetchCollection = getCollection(path[0]);
  const [session, collection] = await Promise.all([fetchSession, fetchCollection]);
  let id = 0;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].id.toString() === path[1]) {
      id = i;
      break;
    }
  }
  const selected = collection[id];

  if (!session) {
    return {
      props: {
        isLoggedIn: false,
        collection: collection,
        selected: selected,
        initial: {},
        favorites: {}
      }
    }
  }

  const email = session.user.email;
  const initialize = await getCart(email);
  const cart = initialize.reduce((accumulator, item) => {
    accumulator[item.obj_key] = item;
    return accumulator;
  }, {});

  const favoritesData = await getFavorites(email);
  const favorites = favoritesData.reduce((accumulator, item) => {
    accumulator[item.print_id] = {};
    accumulator[item.print_id]['id'] = item.id;
    return accumulator;
  }, {});

  return {
    props: {
      isLoggedIn: true,
      collection: collection,
      selected: selected,
      initial: cart,
      favorites: favorites
    }
  }
}