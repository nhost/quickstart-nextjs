import styles from '../styles/pages/Home.module.css';

import { useUserContext } from '../UserProvider';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home = () => {
  const { user } = useUserContext();

  return (
    <Layout>
      <Head>
        <title>Dashboard - Nhost</title>
      </Head>

      <div>
        <h2 className={styles.title}>Dashboard</h2>

        <p className={styles['welcome-text']}>
          Welcome, {user?.metadata?.firstName || 'stranger'}{' '}
          <span role="img" alt="hello">
            👋
          </span>
        </p>

        <p className={styles['info-text']}>
          Edit the <code>pages/index.js</code> file to populate this page.
        </p>
      </div>
    </Layout>
  );
}

export default Home;