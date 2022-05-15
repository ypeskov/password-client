export class User  {
  _user: UserTemplate = new UserTemplate();
  _jwt: string = '';

  getUser() {
    return this._user;
  }

  setUser(user: any) {
    this._user = user;
  }

  setJWT(jwt: string) {
    this._jwt = jwt;
  }

  getJwt() {
    return this._jwt;
  }
}


class UserTemplate {
  email: string = '';
  sub: number = 0;
  first_name: string = '';
  last_name: string = '';
}