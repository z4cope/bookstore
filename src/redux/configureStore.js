import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categories from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories,
  },
});

export default store;
