const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  booksArr: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        booksArr: [...state.booksArr, action.payload],
      };
    case REMOVE_BOOK: {
      return {
        ...state,
        booksArr: state.booksArr.filter((book) => book !== action.payload),
      };
    }
    default:
      return state;
  }
};

export const addBook = (bookType) => ({
  type: ADD_BOOK,
  payload: bookType,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  payload: bookId,
});

export default booksReducer;
