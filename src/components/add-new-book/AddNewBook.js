import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  NewBookWrapper,
  SectionTitle,
  NewBookName,
  NewAutherName,
  SubmitBook,
} from './styles/addNewBook';
import { addBook } from '../../redux/books/books';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [bookName, setBookName] = useState('');
  const [autherName, setAutherName] = useState('');
  const [bookId, setBookId] = useState('');

  const prevDefault = (e) => {
    e.preventDefault();
    setBookName('');
    setAutherName('');
    setBookId(Date.now());
  };
  return (
    <NewBookWrapper onSubmit={(e) => prevDefault(e)}>
      <SectionTitle>Add New Book</SectionTitle>
      <div className="data-wrapper">
        <NewBookName
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          placeholder="Book title"
        />
        <NewAutherName
          value={autherName}
          onChange={(e) => setAutherName(e.target.value)}
          placeholder="Auther name"
        />
        <SubmitBook
          onClick={() => dispatch(addBook(bookName, autherName, bookId))}
        >
          ADD BOOK
        </SubmitBook>
      </div>
    </NewBookWrapper>
  );
};

export default AddNewBook;
