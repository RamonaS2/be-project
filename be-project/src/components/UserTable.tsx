import React, { useEffect, useState } from 'react';
import { User } from '../types/User';
import { formatDate } from '../utils/formatDate';
import { formatPhoneNumber } from '../utils/formatPhone';
import SearchInput from './SearchInput';
import styles from '../styles/UserTable.module.css';

const UserTable: React.FC = () => {
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

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm)
  );

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.table}>
      <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            <th className={styles.foto} >FOTO</th>
            <th className={styles.nome}>NOME</th>
            <th className={styles.cargo}>CARGO</th>
            <th className={styles.data}>DATA DE ADIMISSÃO</th>
            <th className={styles.telefone}>TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td><img src={user.image} alt={user.name} /></td>
              <td>{user.name}</td>
              <td>{user.job}</td>
              <td>{formatDate(user.admission_date)}</td>
              <td>{formatPhoneNumber(user.phone)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
