import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes/routes.component';
import Footer from './components/structures/footer/footer.component';
import './sass/general.style.scss';

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <a id="skipContent" href="#main">
        Skip to main content
      </a>
      <Routes />
      <Footer />
    </Router>
  );
};
export default App;
