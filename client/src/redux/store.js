import { configureStore } from '@reduxjs/toolkit';
import authslice from './auth/slices/authSlice';

const store = configureStore({
  reducer: {
    user: authslice,
  },
});

export default store;
