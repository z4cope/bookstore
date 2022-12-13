const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  booksArr: [
    {
      id: '1',
      bookType: 'Action',
      bookName: 'The Hunger Games',
      bookAuther: 'Suzanne Collins',
      bookProgress: '64%',
      bookChapter: 'Chapter 17',
    },
    {
      id: '2',
      bookType: 'Science Fiction',
      bookName: 'Dune',
      bookAuther: 'Frank Herbert',
      bookProgress: '8%',
      bookChapter: "Chapter 3: 'A Lesson Learned'",
    },
    {
      id: '3',
      bookType: 'Economy',
      bookName: 'Capital in the Twenty-First Century',
      bookAuther: 'Suzanne Collins',
      bookProgress: '0%',
      bookChapter: 'Introduction',
    },
  ],
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
        booksArr: state.booksArr.filter((book) => book.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export const addBook = (id, bookName, bookAuther) => ({
  type: ADD_BOOK,
  payload: { id, bookName, bookAuther },
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  payload: bookId,
});

export default booksReducer;
