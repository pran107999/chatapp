import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [showRegister, setShowRegister] = useState(false); // Toggle between login and register

  return (
    <div className="App">
      <header>
        <button onClick={() => setShowRegister(false)}>Login</button>
        <button onClick={() => setShowRegister(true)}>Register</button>
      </header>

      {showRegister ? (
        <RegisterForm />
      ) : (
        <>
          <LoginForm setUsers={setUsers} />
          {users.length > 0 && <UserList users={users} />}
        </>
      )}
    </div>
  );
}

export default App;
