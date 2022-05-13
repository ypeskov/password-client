import { useContext } from "react";
import { Link } from "react-router-dom";

import { StoreContext } from '../context/store-context';
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation()
  const { user } = useContext(StoreContext);
  const jwt = user.getJwt();

   return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="nav nav-pills nav-fill flex-column flex-sm-row">
              <a className="flex-sm-fill text-sm-center nav-link active" href="#">{t('Favorite')}</a>
              <a className="flex-sm-fill text-sm-center nav-link" href="#">{t('Safe')}</a>
              <a className="flex-sm-fill text-sm-center nav-link" href="#">{t('Settings')}</a>
              <a className="flex-sm-fill text-sm-center nav-link" href="#">{t('Add')}</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
};

export default Dashboard;
