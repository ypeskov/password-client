import {useContext} from "react";
import {Link } from "react-router-dom";

import {StoreContext} from '../context/store-context';

const Dashboard = () => {
  const { user } = useContext(StoreContext);

  const { email, sub, first_name, last_name } = user.getUser(); // eslint-disable-line @typescript-eslint/no-unused-vars
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
