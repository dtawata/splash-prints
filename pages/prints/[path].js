import styles from '../../styles/Prints.module.css';
import { useState, useRef, Fragment, useEffect } from 'react';
import Added from '../../components/prints/Added';
import Thumbnails from '../../components/prints/Thumbnails';
import Gallery from '../../components/prints/Gallery';
import Details from '../../components/prints/Details';
import Related from '../../components/prints/Related';
import { getCollection, getCart, getFavorites, getRelated } from '../../lib/db.js';
import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router';

const Prints = (props) => {
  const { isLoggedIn, cart, collection, favorites, related } = props;
  const [selected, setSelected] = useState(props.selected);
  const recent = useRef(false);
  const router = useRouter();

  useEffect(() => {
    setSelected(props.selected);
  }, [props.selected])

  useEffect(() => {
    recent.current = false;
  }, [router.asPath])

  return (
    <div className={styles.prints}>
      <div className={styles.flex}>
        {recent.current ? <Added /> :
          <Fragment>
            <Thumbnails collection={collection} setSelected={setSelected} />
            <Gallery selected={selected} />
            <Details collection={collection} selected={selected} setSelected={setSelected} cart={cart} isLoggedIn={isLoggedIn} recent={recent} favorites={favorites} />
          </Fragment>}
      </div>
      {!recent.current && <div className={styles.description}>
        <h3>About {selected.artist}</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, libero ipsam? Neque possimus itaque id blanditiis quibusdam suscipit quaerat rem, cum magnam aliquam cumque culpa animi saepe tempore est, nobis maxime expedita nulla iure, impedit modi maiores aliquid aut. Eveniet?</p>
      </div>}
      <Related related={related} />
    </div>
  );
};

export default Prints;

export const getServerSideProps = async (context) => {
  const { path, print } = context.query;
  const fetchSession = getSession({ req: context.req });
  const fetchCollection = getCollection(path);
  const fetchRelated = getRelated(path);
  const [session, collection, related] = await Promise.all([fetchSession, fetchCollection, fetchRelated]);

  let id = 0;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].id.toString() === print) {
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
        favorites: {},
        related: related
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
      favorites: favorites,
      related: related
    }
  }
}