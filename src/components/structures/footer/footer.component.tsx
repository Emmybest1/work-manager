import React, {useEffect, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import './footer.style.scss';

export const Footer: React.FC = (): JSX.Element => {
  const [shouldColorWho, setShouldColorWho] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    let isRendered: boolean = true;

    if (isRendered) {
      setShouldColorWho(location.pathname);
    }
    return () => {
      setShouldColorWho('');
      isRendered = false;
    };
  }, [location]);

  console.log(shouldColorWho);
  return (
    <footer className="footer">
      <div className="footer__row1" role="row">
        <NavLink exact to="/" className={`linker ${!!shouldColorWho && shouldColorWho === '/' ? 'color--me' : ''}`}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/home.svg`}
            alt="Navigation to home icon"
            className="action-icon action-icon--home"
          />
          Home
        </NavLink>

        <NavLink
          to="/view-works"
          className={`linker ${!!shouldColorWho && shouldColorWho === '/view-works' ? 'color--me' : ''}`}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/folder.svg`}
            alt=""
            className="action-icon action-icon--works"
          />
          View Works
        </NavLink>

        <NavLink
          to="/add-work"
          className={`linker ${!!shouldColorWho && shouldColorWho === '/add-work' ? 'color--me' : ''}`}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/upload.svg`}
            alt=""
            className="action-icon action-icon--add"
          />
          Add Work
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
