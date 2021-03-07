import React from 'react';
import './footer.style.scss';

export const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer__row1" role="row">
        <div>
          <i className="fas fa-home-lg-alt"></i>
          Home
        </div>

        <div>
          <i className="fas fa-folder-open"></i>
          View Works
        </div>

        <div>
          <i className="fad fa-folder-plus"></i>
          Add Work
        </div>
      </div>
      <div className="footer__row2" role="row"></div>
    </footer>
  );
};

export default Footer;
