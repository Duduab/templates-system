import { configureStore } from '@reduxjs/toolkit';
import templateReducer from '../slices/templateSlice';

const store = configureStore({
  reducer: {
    templates: templateReducer,
  },
});

export default store;
