import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { filteredReducer } from './contacts/contacts-reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth/auth-slice';
import { contactsSlice } from './contacts/contacts-slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  blacklist: ['filtered'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    filtered: filteredReducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
