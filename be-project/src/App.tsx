import React from 'react';
import UserTable from './components/UserTable';
// import './App.css'; // Caso tenha um arquivo de estilos

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Lista de Funcionários</h1>
      <UserTable />
    </div>
  );
};

export default App;
