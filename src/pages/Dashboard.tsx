import {useContext, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

import {StoreContext} from '../context/store-context';

const Dashboard = () => {
  const { user } = useContext(StoreContext);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user.isLoggedIn) {
  //     navigate('/', {replace: true});
  //   }
  // }, []);

  const { email, sub, first_name, last_name, ...rest } = user.getUser();
  console.log(user.getUser());

  return (
    <>
      <div className="container">
        <div className="row">
          {email}
        </div>

        <div className="row mt-3">
          <div className="col">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Link to="/register">Don't have an account?</Link><br />
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    </>
  )
};

export default Dashboard;
