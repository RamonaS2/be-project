import React from 'react';
import { User } from '../types/User';
import { formatDate } from '../utils/formatDate';
import { formatPhoneNumber } from '../utils/formatPhone';
import SearchInput from './SearchInput';
import styles from '../styles/UserTable.module.css';

interface UserTableProps {
  users: User[];
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, searchTerm, handleSearch }) => {
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm)
  );

  return (
    <div className={styles.table}>
      <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            <th className={styles.foto}>FOTO</th>
            <th className={styles.nome}>NOME</th>
            <th className={styles.cargo}>CARGO</th>
            <th className={styles.data}>DATA DE ADMISSÃO</th>
            <th className={styles.telefone}>TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td><img src={user.image} alt={user.name} className={styles.employeesimg} /></td>
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
