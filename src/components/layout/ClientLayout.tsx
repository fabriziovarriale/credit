
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const ClientLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default ClientLayout;
