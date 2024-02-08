import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import '../Header/Navbar.scss';

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prevState => !prevState);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !document.querySelector('.navbar-mobile').contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, []);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/fake-promises-by-modi', label: 'Fake Promises By Modi' },
    { path: '/most-famous-jumlas-and-quotes-by-modi', label: 'Most Famous Jumlas & Quotes' },
    { path: '/funny-sketches-and-images-gallery-of-modi', label: 'Funny Sketches and Images Gallery' },
    { path: '/comedy-videos-and-clips-of-modi', label: 'Comedy Videos and Clips' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link className="brand-name" to="/" onClick={closeMobileMenu}>
          <h2>Laugh With Modi</h2>
          <h4>Where Sarcasm and Smiles Collide</h4>
        </Link>
      </div>
      <div className="navbar-mobile" onClick={toggleMobileMenu}>
        <h4>Menu</h4>
        <div className="svg-container" ref={mobileMenuRef}>
          {isMobileMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'show' : ''}`} ref={mobileMenuRef}>
          <ul className="main-navbar-list">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  className={`navbar-link ${activeLink === item.path ? 'active' : ''}`}
                  to={item.path}
                  onClick={() => {
                    setActiveLink(item.path);
                    closeMobileMenu();
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
