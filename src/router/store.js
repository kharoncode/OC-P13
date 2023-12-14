import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { loginSlice } from '../pages/login/loginSlice';
import { profileSlice } from '../pages/profile/profileSlice';

const loginStorage = sessionStorage.getItem('login')
   ? JSON.parse(sessionStorage.getItem('login'))
   : localStorage.getItem('login')
   ? JSON.parse(localStorage.getItem('login'))
   : false;
const profileStorage = sessionStorage.getItem('profile')
   ? JSON.parse(sessionStorage.getItem('profile'))
   : localStorage.getItem('profile')
   ? JSON.parse(localStorage.getItem('profile'))
   : false;

const state = {
   login: loginStorage ? loginStorage : {},
   profile: profileStorage
      ? profileStorage
      : {
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
