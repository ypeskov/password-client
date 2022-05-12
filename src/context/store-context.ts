import React from 'react';

import { User } from "./User";

const user = new User();

export const StoreContext = React.createContext({
  user
});

export default StoreContext;