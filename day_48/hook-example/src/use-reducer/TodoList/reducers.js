import { ADD_TODO, DELETE_TODO, EDIT_TODO } from './constants'

// 1. initial state
export const initalState = [
  { id: 1, title: 'Đi chơi', status: false },
  { id: 2, title: 'Đá bóng', status: false },
  { id: 3, title: 'Học bài', status: true },
  { id: 4, title: 'Đi ngủ', status: false },
];

// 3. reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    case EDIT_TODO:
      return state;
    default:
      return state;
  }
};
