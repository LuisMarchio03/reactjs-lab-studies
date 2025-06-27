import { AuthContextProvider } from '../contexts/AuthContext';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
