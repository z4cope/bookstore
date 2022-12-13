import {
  BookWrapper,
  BookData,
  BookType,
  BookName,
  BookAuther,
  BookActions,
  BookComments,
  BookRemove,
  BookEdit,
  BookProgressWrapper,
  BookProgress,
  BookProgressBar,
  BookProgressNumber,
  BookProgressStatus,
  BookProgressText,
  CurrentChapter,
  ChapterNumber,
  UpdateProgress,
} from './styles/book';

const Book = ({
  bookType,
  bookName,
  bookAuther,
  bookProgress,
  bookChapter,
}) => (
  <BookWrapper>
    <BookData>
      <BookType>{bookType}</BookType>
      <BookName>{bookName}</BookName>
      <BookAuther>{bookAuther}</BookAuther>
      <BookActions>
        <BookComments>Comments</BookComments>
        <BookRemove>Remove</BookRemove>
        <BookEdit>Edit</BookEdit>
      </BookActions>
    </BookData>
    <BookProgressWrapper>
      <BookProgress>
        <BookProgressBar />
        <div>
          <BookProgressNumber>{bookProgress}</BookProgressNumber>
          <BookProgressStatus>Completed</BookProgressStatus>
        </div>
      </BookProgress>

      <BookProgressText>
        <CurrentChapter>Current Chapter</CurrentChapter>
        <ChapterNumber>{bookChapter}</ChapterNumber>
        <UpdateProgress>Update Progress</UpdateProgress>
      </BookProgressText>
    </BookProgressWrapper>
  </BookWrapper>
);

export default Book;
