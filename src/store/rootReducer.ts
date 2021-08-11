import { combineReducers, CombinedState } from 'redux';
import { Reducer } from 'react';

import userReducer from './userStore/user.reducer';

const reducers: Reducer<CombinedState<any>, any> = combineReducers({
  user: userReducer
});

export default reducers;
