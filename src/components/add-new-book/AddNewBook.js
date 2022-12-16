import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { postBook } from '../../redux/books/books';
import {
  NewBookWrapper,
  SectionTitle,
  NewBookName,
  NewAutherName,
  SubmitBook,
} from './styles/addNewBook';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const prevDefault = (e) => {
    e.preventDefault();
    setBook(() => ({
      title: '',
      author: '',
    }));
  };

  const handleBookData = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <NewBookWrapper onSubmit={(e) => prevDefault(e)}>
      <SectionTitle>Add New Book</SectionTitle>
      <div className="data-wrapper">
        <NewBookName
          name="title"
          value={book.title}
          onChange={handleBookData}
          placeholder="Book title"
        />
        <NewAutherName
          name="author"
          value={book.author}
          onChange={handleBookData}
          placeholder="Author name"
        />
        <SubmitBook onClick={() => dispatch(postBook(book))} type="submit">
          ADD BOOK
        </SubmitBook>
      </div>
    </NewBookWrapper>
  );
};

export default AddNewBook;
