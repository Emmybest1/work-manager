import React, {useState} from 'react';
import {useUniqueIds} from '../../../hooks/use-uniqueid';
import {Main} from '../../structures/main/main.component';
import Button, {ButtonVariation} from '../../partials/button/button.component';
import Input from '../../partials/input/input.component';
import './home.style.scss';
import Footer from '../../structures/footer/footer.component';

const Home: React.FC = (): JSX.Element => {
  const [emailToRegister, setEmailToRegister] = useState<string>('');
  const [addEmailInputId] = useUniqueIds(1);
  return (
    <>
      <Main>
        <div
          className="home-container"
          style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home-bg.jpg)`}}
        ></div>

        <div className="home-container__overlaper">
          <h2>Welcome to Works Manager,Art works, and more.</h2>
          <p>Ready to upload your works? Enter your email to register.</p>
          <span className="reg-email-wrapper" role="row" tabIndex={0}>
            <Input
              id={addEmailInputId}
              type="email"
              placeholder="Register your email"
              autoComplete="on"
              autoFocus={true}
              value={emailToRegister}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setEmailToRegister(ev.target.value)}
            />
            <Button type="submit" variation={ButtonVariation.error}>
              Register
            </Button>
          </span>
        </div>
      </Main>

      <Footer />
    </>
  );
};

export default Home;
