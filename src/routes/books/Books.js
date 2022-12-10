import { BooksContainer } from './styles/books';
import Book from '../../components/book/Book';
import books from '../../fixtures/booksData';
import AddNewBook from '../../components/add-new-book/AddNewBook';

const Books = () => (
  <>
    <BooksContainer>
      {books.map((book) => (
        <Book
          key={book.id}
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

export default Books;
