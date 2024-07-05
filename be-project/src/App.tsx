import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import UserTable from './components/UserTable';
import { Header } from '../src/components/Header';
import MobileUserTable from './components/MobileUserTable';
import useWindowDimensions from './hooks/useWindowDimensions';
import { User } from './types/User';

const App: React.FC = () => {
  const { width } = useWindowDimensions();
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/employees');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError('Erro ao buscar dados.');
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="App">
      <Header />
      <h4 className={styles.title}>Funcionários</h4>
      {width > 375 ? (
        <UserTable users={users} searchTerm={searchTerm} handleSearch={handleSearch} />
      ) : (
        <MobileUserTable users={users} searchTerm={searchTerm} handleSearch={handleSearch} />
      )}
    </div>
  );
};

export default App;
