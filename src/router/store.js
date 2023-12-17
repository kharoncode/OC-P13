import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { loginSlice } from '../pages/login/loginSlice';
import { profileSlice } from '../pages/profile/profileSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
   login: {
      loading: false,
      token: null,
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

const reducers = combineReducers({
   login: loginSlice.reducer,
   profile: profileSlice.reducer,
});

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['login'],
};

const persistreducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
   reducer: persistreducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export const persistor = persistStore(store, { manualPersist: false });
