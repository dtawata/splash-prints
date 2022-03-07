import '../styles/globals.css'
import Container from '../components/Container';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState('penguin');

  return (
    <Container>
      <Component {...pageProps} cart={cart} />
    </Container>
  )
}

export default MyApp
