import styles from '../styles/pages/SignIn.module.css';

import Head from 'next/head';
import SignIn from '../components/SignIn';

const SignInPage = () => {
  return (
    <>
      <Head>
        <title>Sign in - Nhost</title>
      </Head>

      <div className={styles.container}>
        <SignIn />
      </div>
    </>
  );
};

export default SignInPage;
