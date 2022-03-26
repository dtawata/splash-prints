import '../styles/globals.css'
import Container from '../components/Container';
import { Provider } from 'next-auth/client';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const { isLoggedIn, initial } = pageProps;
  const [cart, setCart] = useState(initial);

  useEffect(() => {
    if (!isLoggedIn) {
      const localCart = localStorage.getItem('cart');
      if (localCart) {
        setCart(JSON.parse(localCart));
      }
    } else {
      setCart(initial);
    }
  }, [initial, isLoggedIn])

  return (
    <Provider session={pageProps.session}>
      <Container {...pageProps} cart={cart}>
        <Component {...pageProps} cart={cart} />
      </Container>
    </Provider>
  )
}

export default MyApp
