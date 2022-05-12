import {FormEvent, RefObject, useRef, useContext} from "react";
import  { Link } from "react-router-dom";

import {StoreContext} from '../context/store-context';

const Login = () => {
  const val = useContext(StoreContext);

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    // @ts-ignore
    const email: string = emailRef.current.value;
    // @ts-ignore
    const password: string = passwordRef.current.value;

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
    const data = await response.json();
    console.log(data);
  };

  const emailRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const passwordRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <form action="http://localhost:8000/auth/login" method="POST">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" ref={emailRef}/>
                <div id="emailHelp" className="form-text">Email address is used for login</div>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" aria-describedby="passwordHelp"
                       ref={passwordRef}/>
                <div id="passwordHelp" className="form-text">Email address is used for login</div>
              </div>

              <button type="submit" className="btn btn-primary" onClick={submitHandler}>Login</button>
            </form>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Link to="/register">Don't have an account?</Link>
          </div>
        </div>
      </div>
    </>
  )
};

export default Login;
