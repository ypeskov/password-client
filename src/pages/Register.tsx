import {FormEvent, useRef } from "react";
import  { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import {useTranslation} from "react-i18next";

const RegisterUserPage = () => {
  const { t } = useTranslation();
  const emailRef: any = useRef<HTMLInputElement>();
  const firstNameRef: any = useRef<HTMLInputElement>();
  const lastNameRef: any = useRef<HTMLInputElement>();
  const passwordRef: any = useRef<HTMLInputElement>();

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    const email: string = emailRef.current.value;
    const firstName: string = firstNameRef.current.value;
    const lastName:string = lastNameRef.current.value;
    const password: string = passwordRef.current.value;

    const response = await fetch('http://localhost:8000/auth/user', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        first_name: firstName,
        last_name: lastName
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">{t('Email address')}</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" ref={emailRef}/>
                <div id="emailHelp" className="form-text">{t('Email address is used for login')}</div>
              </div>

              <div className="mb-3">
                <label htmlFor="first-name" className="form-label">{t('First Name')}</label>
                <input type="text" className="form-control" id="first-name" ref={firstNameRef} />
              </div>

              <div className="mb-3">
                <label htmlFor="last-name" className="form-label">{t('Last Name')}</label>
                <input type="text" className="form-control" id="last-name" ref={lastNameRef}/>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">{t('Password')}</label>
                <input type="password" className="form-control" id="password" ref={passwordRef} />
              </div>

              <div className="mb-3">
                <label htmlFor="password-repeat" className="form-label">{t('Repeat Password')}</label>
                <input type="password" className="form-control" id="password-repeat"/>
              </div>

              <button type="submit" className="btn btn-primary" onClick={submitHandler}>{t('Register')}</button>
            </Form>
          </div>

          <div className="row mt-3">
            <div className="col">
              <Link to="/login">{t('Back to Login')}</Link>
            </div>
          </div>
        </div>

      </div>
    </>
  )
};

export default RegisterUserPage;
