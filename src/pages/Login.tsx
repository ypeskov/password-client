import {FormEvent, RefObject, useRef, useContext } from "react";
import {Link, useNavigate} from "react-router-dom";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import {StoreContext} from '../context/store-context';
import parseJwt from '../utils/parseJwt';

const Login = () => {
  const { t } = useTranslation();
  const { user } = useContext(StoreContext);
  const navigate = useNavigate();

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    // @ts-ignore
    const email: string = emailRef.current.value;
    // @ts-ignore
    const password: string = passwordRef.current.value;

    try {
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        const data = await response.json();
        user.setJWT(data['access_token']);
        user.setUser(parseJwt(data['access_token']));
        user.setLoggedIn(true);

        navigate('/dashboard', {replace: true});
      } else {
        throw new Error(`Ooops. Status ${response.status}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const emailRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const passwordRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Form action="http://localhost:8000/auth/login" method="POST">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">{t('Email address')}</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" ref={emailRef}/>
                <div id="emailHelp" className="form-text">{t('Email address is used for login')}</div>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">{t('Password')}</label>
                <input type="password" className="form-control" id="password" aria-describedby="passwordHelp"
                       ref={passwordRef}/>
                <div id="passwordHelp" className="form-text">{t('Your password for login')}</div>
              </div>

              <button type="submit" className="btn btn-primary" onClick={submitHandler}>{t('Login')}</button>
            </Form>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <Link to="/register">{t("Don't have an account?")}</Link>
          </div>
        </div>
      </div>
    </>
  )
};

export default Login;
