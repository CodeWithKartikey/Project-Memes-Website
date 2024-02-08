import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import '../Footer/Footer.scss';

const Footer = () => {

  // Footer links that can be used to display the footer links.
  const footerLinks = [
    { to: '/about-us', label: 'Who We Are' },
    { to: '/contact-us', label: 'Reach Us' },
    { to: '/privacy-policy', label: 'Privacy Policy' },
    { to: '/terms-conditions', label: 'Terms & Conditions' },
    { to: '/disclaimer', label: 'Disclaimer' },
  ];

  // Social media URLs that can be used to navigate the user's profile.
  const socialMediaLinks = [
    { url: 'https://www.facebook.com/your-facebook-id', icon: FaFacebookSquare, title: 'Facebook' },
    { url: 'https://twitter.com/your-twitter-id', icon: FaTwitterSquare, title: 'Twitter-X' },
    { url: 'https://instagram.com/your-instagram-id', icon: FaInstagramSquare, title: 'Instagram' },
  ];

  return (
    <footer className="footer">
      <div className="upper-footer">
        <div className="first-part">
          <h2>Laugh With Modi</h2>
          <h4>Where Sarcasm and Smiles Collide</h4>
          <p>
            Where humor meets politics.
            We curate witty memes, comical observations, and clever satire on Narendra Modi's adventures.
            Join the laughter revolution. <br />
            <br />
            Keep laughing, keep sharing.
          </p>
        </div>
        <div className="middle-part">
          <ul>
            {footerLinks.map((footerLink, index) => (
              <li key={index}>
                <Link className="middle-part-menu-link" to={footerLink.to}>
                  {footerLink.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="last-part">
          <h2>Follow Us</h2>
          <ul className="last-part-follow-list">
            {socialMediaLinks.map((socialMediaLink, index) => (
              <li key={index}>
                <a href={socialMediaLink.url} target="_blank" rel="noopener noreferrer" title={socialMediaLink.title}>
                  <socialMediaLink.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lower-footer">
        <span>&copy; 2024 Laugh With Modi. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
