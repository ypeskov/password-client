import { useContext } from "react";

import { StoreContext } from '../context/store-context';
import { useTranslation } from "react-i18next";

const Favorite = () => {
  // const {t} = useTranslation()
  const {userFirstName} = useContext(StoreContext);

  return (
    <>
    </>
  )
};

export default Favorite;
