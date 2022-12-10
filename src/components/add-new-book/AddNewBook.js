import {
  NewBookWrapper,
  SectionTitle,
  NewBookName,
  NewBookType,
  SubmitBook,
} from "./styles/addNewBook";

const AddNewBook = () => (
  <NewBookWrapper>
    <SectionTitle>Add New Book</SectionTitle>
    <NewBookName></NewBookName>
    <NewBookType></NewBookType>
    <SubmitBook></SubmitBook>
  </NewBookWrapper>
);

export default AddNewBook;
