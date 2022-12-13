import { useSelector } from 'react-redux';
import { BooksContainer } from './styles/books';
import Book from '../../components/book/Book';
import AddNewBook from '../../components/add-new-book/AddNewBook';

const Books = () => {
  const booksArr = useSelector((state) => state.books.booksArr);
  return (
    <>
      <BooksContainer>
        {booksArr.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            bookType={book.bookType}
            bookName={book.bookName}
            bookAuther={book.bookAuther}
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
