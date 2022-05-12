import React from 'react';

export const user = {
  _user: null,
  _jwt: '',

  getUser() {
    return this._user;
  },

  updateUser(user: any) {
    this._user = user;
  },

  updateJWT(jwt: string) {
    this._jwt = jwt;
  }
};

export const StoreContext = React.createContext({
  user
});

export default StoreContext;