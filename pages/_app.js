import '../styles/globals.css'
import Container from '../components/Container';
import { useState, useEffect } from 'react';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  const initializeCart = pageProps.initializeCart || {};
  const [cart, setCart] = useState(initializeCart);
  console.log('cart', cart);

  return (
    <Provider session={pageProps.session}>
      <Container cart={cart}>
        <Component {...pageProps} cart={cart} setCart={setCart} />
      </Container>
    </Provider>
  )
}

export default MyApp
