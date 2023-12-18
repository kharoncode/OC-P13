import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/es/storage/session';

export const createConfig = (storageType) => {
   const persistConfig = {
      key: 'root',
      storage: storageType === 'sessionStorage' ? sessionStorage : storage,
      whitelist: ['login'],
   };

   return persistConfig;
};
