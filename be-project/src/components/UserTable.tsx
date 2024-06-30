import React, { useEffect, useState } from 'react';
import { User } from '../types/User';
import { formatDate } from '../utils/formatDate';
import { formatPhoneNumber } from '../utils/formatPhone';
import SearchInput from './SearchInput';

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/employees');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Adicionado para depuração
        setUsers(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
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

  return (
    <div>
      <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Data de Admissão</th>
            <th>Telefone</th>
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
