import { useContext, useEffect } from "react";

import { StoreContext } from '../context/store-context';
import { useTranslation } from "react-i18next";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Add = () => {
  // const { t } = useTranslation()
  const { isLoggedIn } = useContext(StoreContext);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">

          </div>
        </div>
      </div>
    </>
  )
};

export default Add;
