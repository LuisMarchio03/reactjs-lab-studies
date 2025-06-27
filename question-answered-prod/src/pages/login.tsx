import { useRouter } from 'next/dist/client/router';
import { useAuth } from '../hooks/useAuth';

import { FcGoogle } from 'react-icons/fc';

import styles from './login.module.scss';

export default function Login() {
  const router = useRouter()
  const { user, signInWithGoogle } = useAuth();

  async function handleSingIn() {

    if (!user) {
      await signInWithGoogle();
    }

    if (user) {
      router.push('/');
    }

    router.push('/');
  }

  return (
   <div className={styles.loginContainer}>
     <img src="images/logo.svg" alt="Logo Q&amp;A" />
     <strong>Q&amp;A</strong>

     <div className={styles.buttonContainer}>
      <button
        type="button"
        onClick={handleSingIn}
      >
        <span><FcGoogle /></span> Entrar com o Google
      </button>
     </div>
   </div>
  )
}
