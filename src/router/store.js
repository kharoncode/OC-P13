import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';
import { thunk } from 'redux-thunk';
import { loginSlice } from '@pages/login/loginSlice';
import { profileSlice } from '@pages/profile/profileSlice';
import { loginLocalSlice } from '@pages/login/loginLocalSlice';

const persistConfig = {
   key: 'root',
   storage: storageSession,
   blacklist: ['profile'],
};

const persistConfigLocal = {
   key: 'local',
   storage: storage,
   blacklist: ['profile'],
};

const reducers = combineReducers({
   loginLocal: persistReducer(persistConfigLocal, loginLocalSlice.reducer),
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
