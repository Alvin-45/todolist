import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoslices';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
