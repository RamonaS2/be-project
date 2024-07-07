import React, { useState } from 'react';
import { User } from '../types/User';
import { formatDate } from '../utils/formatDate';
import { formatPhoneNumber } from '../utils/formatPhone';
import styles from '../styles/MobileUserTable.module.css';
import SearchInput from './SearchInput';

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
    <div className={styles.mobileTable}>
      <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
      
        <table className={styles.mobilethead}>
          <thead className={styles.tableHeadermobile}>
              <tr>
                <div>
                  <th className={styles.thmobile}>FOTO</th>
                  <th className={styles.thmobile}>NOME</th>
                  <th className={styles.thmobile}>•</th>
                </div>
              </tr>
          </thead>
          <tbody>
            
            {filteredUsers.map(user => (
              <tr key={user.id} className={styles.tableRowmobile}>
                <div className={styles.tableHeadermobile} onClick={() => toggleExpand(user.id)}>
                  <td className={styles.thmobile}><img src={user.image} alt={user.name} className={styles.employeesmobileimg} /></td>
                  <td className={styles.thmobile}><span>{user.name}</span></td>
                    <td className={styles.thmobile}>
                      <button onClick={() => toggleExpand(user.id)}>
                        {expandedUserId === user.id ? '▲' : '▼'}
                      </button>
                    </td>
                </div>
                {expandedUserId === user.id && (
                  <div className={styles.tableDetailsmobile}>
                    <p><strong>Cargo:</strong> {user.job}</p>
                    <p><strong>Data de admissão:</strong> {formatDate(user.admission_date)}</p>
                    <p><strong>Telefone:</strong> {formatPhoneNumber(user.phone)}</p>
                  </div>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default MobileUserTable;
