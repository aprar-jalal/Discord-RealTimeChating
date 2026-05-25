import React, { useState } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login'); 
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setCurrentPage('chat');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('login');
  };

  return (
    <div className="main-app">
      {currentPage === 'register' && (
        <Register onNavigate={setCurrentPage} />
      )}
      {currentPage === 'login' && (
        <Login onLoginSuccess={handleLoginSuccess} onNavigate={setCurrentPage} />
      )}
      {currentPage === 'chat' && user && (
        <Chat user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;