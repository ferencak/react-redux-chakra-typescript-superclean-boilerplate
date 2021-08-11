import {
  loginIsPending,
  loginSuccess,
  loginError,
} from './user.action.creators';

import { IUserPayload } from './types';
import { dispatch } from './../store';

export const LoginAction = ({username, password}: any): any => {
  return () => {
    let response: IUserPayload = {};
    dispatch(loginIsPending());
    if (username === 'test') {
      if (password === 'test') {
        response = {
          userData: {
            username: 'test',
            email: 'test@gmail.com',
          },
          token: '5as4d56a4d654sdakv',
        };
        localStorage.setItem('token', String(response.token));
        return dispatch(loginSuccess(response));
      }
      response = {
        errorMessage: 'password incorrect',
      };
      return dispatch(loginError(response));
    }
    response = {
      errorMessage: 'user does not exist',
    };
    return dispatch(loginError(response));
  };
};
