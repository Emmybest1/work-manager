import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from '../../partials/button/button.component';
import Main from '../../structures/main/main.component';
import './fallback.style.scss';

type TFallbackProps = {
  message?: string;
  fallbackPath?: string;
};
export const Fallback: React.FC<TFallbackProps> = ({message, fallbackPath}): JSX.Element => {
  const history = useHistory();

  return (
    <Main>
      <div className="fallback-container">
        <img src={`${process.env.PUBLIC_URL}/assets/images/error.svg`} alt="" />

        <p>{message ? message : 'Sorry, the page you try to access is unavailable.'}</p>

        <Button onClick={() => history.push(fallbackPath ?? '/')}>Go Home</Button>
      </div>
    </Main>
  );
};

export default Fallback;
