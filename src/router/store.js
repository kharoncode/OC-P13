import { combineReducers, configureStore } from '@reduxjs/toolkit';

let state = {
   user: { name: 'bob' },
   isConnected: false,
};

export const store = configureStore({
   preloadedState: state,
   reducer: combineReducers({}),
});
