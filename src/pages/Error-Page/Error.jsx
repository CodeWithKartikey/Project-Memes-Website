import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Error-Page/Error.scss';

const Error = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(10);
  const navigate = useNavigate();

  const redirectToHomePage = () => {
    navigate('/');
  };

  useEffect(() => {
    const redirectTimer = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        clearInterval(redirectTimer);
        redirectToHomePage();
      }
    }, 1000);
    return () => {
      clearInterval(redirectTimer);
    };
    // eslint-disable-next-line
  }, [secondsRemaining]);

  return (
    <>
      <div className="error-wrapper">
        <div className='error-page'>
          <h1>404 - Page Not Found</h1>
          <h2>The page you are looking for does not exist.</h2>
        </div>
        <p>You will be redirected to the home page in {secondsRemaining} seconds...</p>
      </div>
    </>
  );
}

export default Error;
