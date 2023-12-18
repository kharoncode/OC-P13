import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';
import { thunk } from 'redux-thunk';
import { loginSlice } from '@pages/login/loginSlice';
import { profileSlice } from '@pages/profile/profileSlice';
import { loginSessionSlice } from '@pages/login/loginSessionSlice';

const persistConfig = {
   key: 'root',
   storage: storageSession,
};

const persistConfigSession = {
   key: 'session',
   storage: storage,
};

const reducers = combineReducers({
   loginSession: persistReducer(
      persistConfigSession,
      loginSessionSlice.reducer
   ),
   login: loginSlice.reducer,
   profile: profileSlice.reducer,
});

const store = configureStore({
   reducer: persistReducer(persistConfig, reducers),
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

const persistor = persistStore(store, null);

export { store, persistor };
