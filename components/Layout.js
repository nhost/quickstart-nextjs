import styles from '../styles/components/Layout.module.css';

import React, { Fragment } from 'react';
import { useUserContext } from '../UserProvider';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  HomeIcon,
  LogoutIcon,
  UserIcon,
} from '@heroicons/react/outline';
import Avatar from './Avatar';

const Layout = ({ children = null }) => {
  const { user } = useUserContext();

  const menuItems = [
    {
      label: 'Dashboard',
      href: '/',
      icon: HomeIcon,
    },
    {
      label: 'Profile',
      href: '/profile',
      icon: UserIcon,
    },
    {
      label: 'Logout',
      onClick: () => null,
      icon: LogoutIcon,
    },
  ];

  return (
    <div>
      <header className={styles.header}>
        <div className={styles['header-container']}>
          <div className={styles['logo-wrapper']}>
            <Link href="/">
              <a>
                <Image
                  src="/logo.svg"
                  alt="logo"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </Link>
          </div>

          <Menu as="div" className={styles.menu}>
            <Menu.Button className={styles['menu-button']}>
              <Avatar src={user?.avatarUrl} alt={user?.displayName} />
              <ChevronDownIcon />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter={styles['menu-transition-enter']}
              enterFrom={styles['menu-transition-enter-from']}
              enterTo={styles['menu-transition-enter-to']}
              leave={styles['menu-transition-leave']}
              leaveFrom={styles['menu-transition-leave-from']}
              leaveTo={styles['menu-transition-leave-to']}
            >
              <Menu.Items className={styles['menu-items-container']}>
                <div className={styles['menu-header']}>
                  <Avatar src={user?.avatarUrl} alt={user?.displayName} />
                  <div className={styles['user-details']}>
                    <span>{user?.displayName}</span>
                    <span className={styles['user-email']}>{user?.email}</span>
                  </div>
                </div>

                <div className={styles['menu-items']}>
                  {menuItems.map(({ label, href, onClick, icon: Icon }) => (
                    <div key={label} className={styles['menu-item']}>
                      <Menu.Item>
                        {href ? (
                          <Link href={href}>
                            <a>
                              <Icon />
                              <span>{label}</span>
                            </a>
                          </Link>
                        ) : (
                          <button onClick={onClick}>
                            <Icon />
                            <span>{label}</span>
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles['main-container']}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
