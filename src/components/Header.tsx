import { useContext } from "react";
import StoreContext from "../context/store-context";
import { useTranslation } from "react-i18next";
import { isSessionActive } from "../utils/sessionManager";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  let { userFirstName }: any = useContext(StoreContext);

  if (!userFirstName) {
    userFirstName = sessionStorage.getItem('firstName');
  }
  const isSession = isSessionActive();

  const clearSession = () => {
    sessionStorage.clear();
    navigate('/login', {replace: true});
  }

  let sessionArea;
  if (isSession) {
    sessionArea = (
      <div>
        <div>
          {t('Hello')}, {userFirstName}
        </div>
        <div>
          <a href="" onClick={clearSession}>{t('Logout')}</a>
        </div>
      </div>

    );
  } else {
    sessionArea = (
      <div>

      </div>
    )
  }

  return (
    <div className="header-container container">
      <div className="row">
        <div className="col-sm">
          <div className="float-end">
            {sessionArea}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header