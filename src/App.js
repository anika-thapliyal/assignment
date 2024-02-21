import React, { useState } from 'react';
import { UserProvider } from './context/UserContext';
import SignInPage from './pages/SignInPage';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('signin');

  return (
    <UserProvider>
      <div>
        {currentPage === 'signin' && <SignInPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'dashboard' && <DashboardPage />}
      </div>
    </UserProvider>
  );
};

export default App;
