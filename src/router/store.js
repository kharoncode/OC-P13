import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../components/user/userSlice';

let state = {
   user: {
      email: 'steve@rogers.com',
      firstName: 'Steve',
      lastName: 'Rogers',
      createdAt: '2023-12-11T12:02:23.649Z',
      updatedAt: '2023-12-11T12:02:23.649Z',
      id: '6576fa4f39b8798f741fa323',
   },
};

export const store = configureStore({
   preloadedState: state,
   reducer: combineReducers({
      user: userSlice.reducer,
   }),
});
