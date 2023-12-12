import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../components/user/userSlice';
import { loginSlice } from '../pages/login/loginSlice';
import { apiSlice } from '../services/profileApi';
import { authSlice } from '../pages/login/authSlice';
import { api } from '../services/testApi';
import { thunk } from 'redux-thunk';
import { profileSlice } from '../pages/profile/profileSlide';

let state = {
   user: {
      email: 'steve@rogers.com',
      firstName: 'Steve',
      lastName: 'Rogers',
      createdAt: '2023-12-11T12:02:23.649Z',
      updatedAt: '2023-12-11T12:02:23.649Z',
      id: '6576fa4f39b8798f741fa323',
   },
   login: {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzZmYTRmMzliODc5OGY3NDFmYTMyMyIsImlhdCI6MTcwMjM4OTc5MSwiZXhwIjoxNzAyNDc2MTkxfQ.A_cv1JkDQ8KMxhPIuUMwv03CgbL6WISbDQBN0P4cbbw',
   },
   auth: {},
   profile: {},
};

export const store = configureStore({
   preloadedState: state,
   reducer: combineReducers({
      user: userSlice.reducer,
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
   // middleware: (getDefaultMiddleware) =>
   //    getDefaultMiddleware().concat(api.middleware),
});
