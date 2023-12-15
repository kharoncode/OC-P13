import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { loginSlice } from '../pages/login/loginSlice';
import { profileSlice } from '../pages/profile/profileSlice';

const tokenStorage = sessionStorage.getItem('token')
   ? JSON.parse(sessionStorage.getItem('token'))
   : localStorage.getItem('token')
   ? JSON.parse(localStorage.getItem('token'))
   : false;

const state = {
   login: {
      loading: false,
      token: tokenStorage,
      error: null,
   },
   profile: {
      loading: true,
      profile: null,
      error: null,
      isAuthenticated: false,
      account: [
         {
            title: 'Argent Bank Checking (x8349)',
            amount: 2082.79,
            description: 'Available Balance',
         },
         {
            title: 'Argent Bank Savings (x6712)',
            amount: 10928.42,
            description: 'Available Balance',
         },
         {
            title: 'Argent Bank Credit Card (x8349)',
            amount: 184.3,
            description: 'Available Balance',
         },
      ],
   },
};

export const store = configureStore({
   preloadedState: state,
   reducer: combineReducers({
      login: loginSlice.reducer,
      profile: profileSlice.reducer,
   }),
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
