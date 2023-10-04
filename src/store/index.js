import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slice/index'

export const store = configureStore({
  reducer: cartReducer,
});

