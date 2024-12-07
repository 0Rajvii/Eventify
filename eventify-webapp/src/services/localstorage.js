const TOKEN_KEY = 'eventify_token';

export const getAccessToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setAccessToken = (token) => {
  return localStorage.setItem(TOKEN_KEY, token);
};

export const clearAccessToken = () => {
  return localStorage.clear(TOKEN_KEY);
};

export const getUserFromLocalstorage = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const saveUserToLocalstorage = (user) => {
  return localStorage.setItem('user', JSON.stringify(user));
};

export const clearUserFromLocalstorage = () => {
  return localStorage.removeItem('user');
};


