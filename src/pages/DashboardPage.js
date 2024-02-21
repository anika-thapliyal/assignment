import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const DashboardPage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Dashboard</h2>
        <div className="mt-8">
          {user ? (
            <div>
              <p className="text-center">Welcome, {user.name}!</p>
              <p className="text-center">Email: {user.email}</p>
            </div>
          ) : (
            <p className="text-center text-red-600">You are not authenticated. Please sign in.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
