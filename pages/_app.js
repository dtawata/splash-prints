import '../styles/globals.css'
import Container from '../components/Container';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  const { isLoggedIn } = pageProps;

  if (typeof window !== 'undefined' && !isLoggedIn) {
    const cart = localStorage.getItem('cart');
    if (cart) {
      pageProps.cart = JSON.parse(cart);
    }
  }

  return (
    <Provider session={pageProps.session}>
      <Container {...pageProps}>
        <Component {...pageProps} />
      </Container>
    </Provider>
  )
}

export default MyApp
