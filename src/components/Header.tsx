import React from 'react';
import logo from '../images/logo.svg'
import styles from '../styles/Header.module.css'

export const Header: React.FC = () => {
    return (
      <header className={styles.header}>
        <img src={logo} alt='logo bemobile'/>
      </header>
    );
  };