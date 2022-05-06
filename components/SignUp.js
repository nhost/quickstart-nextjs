import styles from '../styles/components/SignUp.module.css';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Input from './Input';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
          <div className={styles['input-group']}>
            <Input
              label="First name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
            <Input
              label="Last name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
          </div>
          <Input
            type="email"
            label="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            label="Create password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type="submit" className={styles.button}>
            Create account
          </button>
        </form>
      </div>

      <p className={styles.text}>
        Already have an account?{' '}
        <Link href="/sign-in">
          <a className={styles.link}>Sign in</a>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
