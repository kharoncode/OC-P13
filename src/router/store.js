import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { loginSlice } from '@pages/login/loginSlice';
import { profileSlice } from '@pages/profile/profileSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/es/storage/session';
import { sessionSlice } from '@pages/login/sessionSlice';

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['login'],
   blacklist: ['loginSession'],
};

const persistConfigSession = {
   key: 'session',
   storage: sessionStorage,
   whitelist: ['loginSession'],
};

const reducers = combineReducers({
   loginSession: persistReducer(persistConfigSession, sessionSlice.reducer),
   login: loginSlice.reducer,
   profile: profileSlice.reducer,
});

const persistreducer = persistReducer(persistConfig, reducers);

const store = configureStore({
   reducer: persistreducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

const persistor = persistStore(store, null);

export { store, persistor };
