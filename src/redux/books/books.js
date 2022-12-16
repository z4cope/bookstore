import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  postRequest,
  getRequset,
  deleteRequest,
} from '../../requests/requests';

const POST_BOOK = 'POST_BOOK';
const FETCH_BOOKS = 'FETCH_BOOKS';
const DELETE_BOOK = 'DELETE_BOOK';

const initialState = {
  booksArr: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${POST_BOOK}/fulfilled`:
      return {
        ...state,
        booksArr: [...state.booksArr, action.payload],
      };
    case `${FETCH_BOOKS}/fulfilled`:
      return {
        ...state,
        booksArr: action.payload,
      };
    case `${DELETE_BOOK}/fulfilled`:
      return {
        ...state,
        booksArr: state.booksArr.filter(
          (book) => book.item_id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export const postBook = createAsyncThunk(POST_BOOK, async (book) => {
  const bookObj = {
    ...book,
    item_id: Date.now(),
    category: 'N/A',
    bookType: 'Action',
    bookProgress: '67%',
    bookChapter: 'Chapter 17',
  };
  await postRequest(bookObj);
  return bookObj;
});
export const fetchBooks = createAsyncThunk(FETCH_BOOKS, async () => {
  const bookArr = [];
  const data = await getRequset();
  Object.keys(data).forEach((id) => {
    bookArr.push({
      item_id: id,
      ...data[id][0],
    });
  });
  return bookArr;
});
export const deleteBook = createAsyncThunk(DELETE_BOOK, async (id) => {
  deleteRequest(id);
  return id;
});

export default booksReducer;
