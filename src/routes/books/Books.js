import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BooksContainer } from './styles/books';
import { fetchBooks } from '../../redux/books/books';
import Book from '../../components/book/Book';
import AddNewBook from '../../components/add-new-book/AddNewBook';

const Books = () => {
  const { booksArr } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <BooksContainer>
        {booksArr.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            bookType={book.bookType}
            bookName={book.title}
            bookAuther={book.author}
            bookProgress={book.bookProgress}
            bookChapter={book.bookChapter}
          />
        ))}
      </BooksContainer>
      <AddNewBook />
    </>
  );
};

export default Books;
