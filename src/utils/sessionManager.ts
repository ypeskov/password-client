const SESSION_TIME = 600000;

export const setNewSession = (lifeTime: number = SESSION_TIME) => {
  sessionStorage.setItem('expirationTime', (Date.now() + SESSION_TIME).toString());
}

export const isSessionActive = (): boolean => {
  const expiration = sessionStorage.getItem('expirationTime');
  const expir = expiration ? parseInt(expiration) : 0;
  const now = Date.now();

  if (expiration === null || expir < now) {
    sessionStorage.clear();
    return false;
  }

  return true;
};