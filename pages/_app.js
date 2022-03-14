import '../styles/globals.css'
import Container from '../components/Container';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});

  return (
    <Container cart={cart}>
      <Component {...pageProps} cart={cart} setCart={setCart} />
    </Container>
  )
}

export default MyApp
