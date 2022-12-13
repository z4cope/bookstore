/* eslint-disable */
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
    <div className="data-wrapper">
      <NewBookName />
      <NewBookType>
        <select>
          <option value="action">Action</option>
          <option value="drama">Drama</option>
        </select>
      </NewBookType>
      <SubmitBook>ADD BOOK</SubmitBook>
    </div>
  </NewBookWrapper>
);

export default AddNewBook;
