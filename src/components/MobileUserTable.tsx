import React, { useState } from 'react';
import { User } from '../types/User';
import { formatDate } from '../utils/formatDate';
import { formatPhoneNumber } from '../utils/formatPhone';
import styles from '../styles/MobileUserTable.module.css';
import SearchInput from './SearchInput';
import mobiletablehead from '../images/mobiletablehead.svg'

interface MobileUserTableProps {
  users: User[];
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MobileUserTable: React.FC<MobileUserTableProps> = ({ users, searchTerm, handleSearch }) => {
  const [expandedUserId, setExpandedUserId] = useState<string | null>(null);

  const toggleExpand = (userId: string) => {
    setExpandedUserId(expandedUserId === userId ? null : userId);
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm)
  );

  return (
    <div>
      <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
      <div  className={styles.mobileTable}>
        <div className={styles.cabeçalho}>
          <span>FOTO</span>
          <span>NOME</span>
          <span>•</span>
        </div>
        {filteredUsers.map(user => (
          <div key={user.id} className={styles.tableRow}>
            <div className={styles.tableHeader} onClick={() => toggleExpand(user.id)}>
              <img src={user.image} alt={user.name} className={styles.employeesimg} />
              <span>{user.name}</span>
              <button onClick={() => toggleExpand(user.id)}>
                {expandedUserId === user.id ? '▲' : '▼'}
              </button>
            </div>
            {expandedUserId === user.id && (
              <div className={styles.tableDetails}>
                <p><strong>Cargo:</strong> {user.job}</p>
                <p><strong>Data de admissão:</strong> {formatDate(user.admission_date)}</p>
                <p><strong>Telefone:</strong> {formatPhoneNumber(user.phone)}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileUserTable;