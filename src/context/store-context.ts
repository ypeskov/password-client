import React from 'react';


export const StoreContext = React.createContext({
  userEmail: '',
  setUserEmail: (email: string) => {},
  userFirstName: '',
  setUserFirstName: (firstName: string) => {},
  userLastName: '',
  setUserLastName: (lastName: string) => {},
  jwt: '',
  setJwt: (jwt: string) => {},
  isLoggedIn: false
});

export default StoreContext;