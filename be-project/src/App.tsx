import React from 'react';
import styles from './App.module.css';
import UserTable from './components/UserTable';
import {Header} from '../src/components/Header'

const App = () => {
  return (
    <div className={styles.container}>
     <Header/>
     <h4 className={styles.title}>Funcionários</h4>
     <UserTable/>
    </div>
  );
};

export default App;
