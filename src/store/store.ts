import { applyMiddleware, createStore, compose } from 'redux';
import Thunk from 'redux-thunk';
import reducers from './rootReducer';

const store: ReturnType<typeof createStore> = createStore(
  reducers,
  compose(
    applyMiddleware(Thunk),
  ),
);

const dispatch = store.dispatch
export { dispatch, store }