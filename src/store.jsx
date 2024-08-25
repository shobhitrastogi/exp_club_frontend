import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import bookReducer from './reducers/bookReducer';
import matchReducer from './reducers/matchReducer';

const rootReducer = combineReducers({
  user: userReducer,
  books: bookReducer,
  matches: matchReducer,
});

const store = createStore(rootReducer);

export default store;
