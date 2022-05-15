import { useContext, useEffect } from "react";
import StoreContext from "../context/store-context";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  let { userFirstName }: any = useContext(StoreContext);

  if (!userFirstName) {
    userFirstName = sessionStorage.getItem('firstName');
  }

  return (
    <div className="header-container container">
      <div className="row">
        <div className="col-sm">
          <div className="float-end">
            {t('Hello')}, {userFirstName}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header