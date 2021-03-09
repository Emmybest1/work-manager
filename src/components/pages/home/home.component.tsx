import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useUniqueIds} from '../../../hooks/use-uniqueid';
import {Main} from '../../structures/main/main.component';
import Button, {ButtonVariation} from '../../partials/button/button.component';
import Input from '../../partials/input/input.component';
import {registerUser} from '../../../redux/root.actions';
import {selectIsLoadingUser, selectErrorUser, selectRegisteredUser} from '../../../redux/root.selectors';
import ErrorBoundary from '../../partials/error-boundary/error-boundary.component';
import './home.style.scss';

const Home: React.FC = (): JSX.Element => {
  const [emailToRegister, setEmailToRegister] = useState<string>('');
  const [addEmailInputId] = useUniqueIds(1);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingUser);
  const error = useSelector(selectErrorUser);
  const registeredUser = useSelector(selectRegisteredUser);

  console.log(isLoading, error, registeredUser);

  /***************************************************************************************
   * @useEffect for ux purpose, lets only erase  the email when registration is successful
   ***************************************************************************************/
  useEffect(() => {
    if (!error) {
      setEmailToRegister('');
    }
  }, [error, registeredUser]);

  return (
    <ErrorBoundary>
      <Main>
        <div
          className="home-container"
          style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home-bg.jpg)`}}
        ></div>

        <div className="home-container__overlaper">
          {/* <h2>Welcome to Works Manager,Art works, and more.</h2>
          <p>Ready to upload your works? Enter your email to register.</p> */}
          <span className="reg-email-wrapper" data-searchType="btnType" role="row" tabIndex={0}>
            <Input
              id={addEmailInputId}
              type="email"
              placeholder="Register your email"
              autoComplete="on"
              autoFocus={true}
              value={emailToRegister}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setEmailToRegister(ev.target.value)}
            />
            <Button
              type="submit"
              variation={ButtonVariation.error}
              disabled={!!emailToRegister ? false : true}
              onClick={() => dispatch(registerUser({email: emailToRegister}))}
            >
              Register
            </Button>
          </span>
        </div>
      </Main>
    </ErrorBoundary>
  );
};

export default Home;
