import { useEffect, useState } from 'react';

import { useNavigate } from "react-router-dom";
import { isSessionActive } from "../utils/sessionManager";

const AuthGuard = ({ children }: any) => {
  const [jsx, setJsx] = useState(null);
  const navigate = useNavigate();

  const isSession = isSessionActive();

  useEffect(() => {
    if (isSession) {
      setJsx(children);
    } else {
      setJsx(null);
      navigate('/login')
    }
  }, [isSession, children, navigate]);

  return jsx;
};

export default AuthGuard;