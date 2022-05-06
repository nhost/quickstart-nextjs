import styles from '../styles/components/SignIn.module.css';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Input from './Input';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles['logo-wrapper']}>
          <Image src="/logo.svg" alt="logo" layout="fill" objectFit="contain" />
        </div>

        <form onSubmit={handleOnSubmit} className={styles.form}>
          <Input
            type="email"
            label="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type="submit" className={styles.button}>
            Sign in
          </button>
        </form>
      </div>

      <p className={styles.text}>
        No account yet?{' '}
        <Link href="/sign-up">
          <a className={styles.link}>Sign up</a>
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
