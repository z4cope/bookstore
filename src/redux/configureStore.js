import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categories from './categories/categories';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    categories,
  },
});
