import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';

import { MdCurrencyExchange } from 'react-icons/md';

import styles from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectBaseCurrency } from 'reduxState/currencysSice';

export const Header = ({ children }) => {
  const baseCurrency = useSelector(selectBaseCurrency);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <MdCurrencyExchange className={styles.logo} />
          <nav>
            <ul className={styles.nav}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rates"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Rates
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {/* //✔ Add base currency here !!! */}
        {baseCurrency && (
          <p className={styles.currency}> Your base currency: {baseCurrency}</p>
        )}
      </header>
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};
