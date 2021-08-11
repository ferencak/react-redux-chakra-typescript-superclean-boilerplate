import { action } from 'typesafe-actions';
import actionTypes from './action.enum';
import { IUserPayload } from './types';

const loginIsPending = () => action(actionTypes.LOGIN_PENDING);

const loginSuccess = (userParams: IUserPayload) =>
  action(actionTypes.LOGIN_SUCCESS, userParams);

const loginError = (error: IUserPayload) =>
  action(actionTypes.LOGIN_ERROR, error);

export { loginError, loginSuccess, loginIsPending };
