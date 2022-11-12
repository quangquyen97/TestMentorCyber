import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { GetUserList } from './reducer/GetUserListReducer';

const rootReducer = combineReducers({
  GetUserList
});
  
  export const store = createStore(rootReducer, applyMiddleware(thunk));