import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loginSlice } from '../pages/login/loginSlice';
import { apiSlice } from '../services/profileApi';
import { authSlice } from '../pages/login/authSlice';
import { api } from '../services/testApi';
import { thunk } from 'redux-thunk';
import { profileSlice } from '../pages/profile/profileSlice';

let state = {
   login: {},
   auth: {},
   profile: {},
};

export const store = configureStore({
   preloadedState: state,
   reducer: combineReducers({
      login: loginSlice.reducer,
      auth: authSlice.reducer,
      profile: profileSlice.reducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
      [api.reducerPath]: api.reducer,
   }),
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
         .concat(apiSlice.middleware)
         .concat(api.middleware)
         .concat(thunk),
});
