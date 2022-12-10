import {
  NewBookWrapper,
  SectionTitle,
  NewBookName,
  NewBookType,
  SubmitBook,
} from './styles/addNewBook';

const AddNewBook = () => (
  <NewBookWrapper>
    <SectionTitle>Add New Book</SectionTitle>
    <NewBookName />
    <NewBookType />
    <SubmitBook />
  </NewBookWrapper>
);

export default AddNewBook;
