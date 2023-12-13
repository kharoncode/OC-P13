import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { loginSlice } from '../pages/login/loginSlice';
import { profileSlice } from '../pages/profile/profileSlice';

let state = {
   login: {},
   profile: {},
};

export const store = configureStore({
   preloadedState: state,
   reducer: combineReducers({
      login: loginSlice.reducer,
      profile: profileSlice.reducer,
   }),
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
