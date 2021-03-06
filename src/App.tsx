import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes/routes.component';
import './sass/general.style.scss';

const App: React.FC = (): JSX.Element => {
  console.log(process.env);
  return (
    <Router>
      <a href="#main">Skip to main content</a>
      <Routes />
    </Router>
  );
};

export default App;
