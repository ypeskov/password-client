import {FC, useEffect, useState} from 'react';
import { useContext } from "react";

import StoreContext from "../context/store-context";
import {useNavigate} from "react-router-dom";


interface Props {
  children: any;
}

const AuthGuard: FC<Props> = ({children}) => {
  const { user } = useContext(StoreContext);
  const isLoggedIn = useState(user.isLoggedIn)[0];
  const [jsx, setJsx] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      setJsx(children);
    } else {
      setJsx(null);
      navigate('/login')
    }
  }, [isLoggedIn, children, navigate ]);

  return jsx;
};

export default AuthGuard;