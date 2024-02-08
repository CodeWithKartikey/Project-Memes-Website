import React from 'react';
import PageRouter from './routes/PageRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/global.scss';

const App = () => {
  return (
    <>
      <Router>
        <PageRouter />
      </Router>
    </>
  );
};

export default App;
