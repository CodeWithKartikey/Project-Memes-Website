import React from 'react';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  );
};

export default Layout;
