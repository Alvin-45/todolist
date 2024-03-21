import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('todos')) || [];

const todoslices = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state));
    },
    deletetodo: (state, action) => {
      const newState = state.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    },
    toggle: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem('todos', JSON.stringify(state));
      }
    }
  }
});

export const { add, deletetodo, toggle } = todoslices.actions;
export default todoslices.reducer;
