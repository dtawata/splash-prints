import '../styles/globals.css'
import Container from '../components/Container';
import { useState } from 'react';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});

  return (
    <Provider session={pageProps.session}>
      <Container cart={cart}>
        <Component {...pageProps} cart={cart} setCart={setCart} />
      </Container>
    </Provider>
  )
}

export default MyApp
