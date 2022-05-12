import {FC, useEffect, useState} from 'react';
import { useContext } from "react";

import StoreContext from "../context/store-context";
import {useNavigate} from "react-router-dom";


interface Props {
  children: any;
}

const AuthGuard: FC<Props> = ({children}) => {
  const { user } = useContext(StoreContext);
  const [isLoggedIn, setIsLoggedIn] = useState(user.isLoggedIn);
  const [ret, setRet] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      setRet(children);
    } else {
      setRet(null);
      navigate('/login')
    }
  }, []);

  return ret;
};

export default AuthGuard;