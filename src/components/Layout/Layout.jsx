import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import React, { useState } from 'react';


const Layout = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div>
    <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
