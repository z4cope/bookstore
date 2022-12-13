import styled from 'styled-components';

export const BookWrapper = styled.article`
  background: #fff;
  border: 1px solid rgb(232, 232, 232);
  display: flex;
  border-radius: 3px;
  justify-content: space-between;
  padding: 2rem;
`;

export const BookData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const BookType = styled.h2`
  color: #121212;
  font-size: 1rem;
`;

export const BookName = styled.h2``;

export const BookAuther = styled.h2`
  color: #2e94ff;
  font-size: 1rem;
  font-weight: 300;
`;

export const BookActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const BookComments = styled.button`
  font-size: 1rem;
  color: #2e94ff;
  font-weight: 100;
  background: none;
  border: none;
  cursor: pointer;
`;

export const BookRemove = styled.button`
  font-size: 1rem;
  color: #2e94ff;
  font-weight: 100;
  padding: 0 1rem;
  background: none;
  border: none;
  border-left: 1px solid rgb(232, 232, 232);
  border-right: 1px solid rgb(232, 232, 232);
  cursor: pointer;
`;

export const BookEdit = styled.button`
  font-size: 1rem;
  color: #2e94ff;
  font-weight: 100;
  background: none;
  border: none;
  cursor: pointer;
`;

export const BookProgressWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4rem;
  width: 45%;
`;

export const BookProgress = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`;

export const BookProgressBar = styled.div`
  width: 4.25rem;
  height: 4.25rem;
  transform: rotate(45deg);
  border-radius: 50%;
  border-width: 5px;
  border-style: solid;
  border-color: rgb(48, 123, 190) rgb(48, 123, 190) rgb(48, 123, 190)
    rgb(232, 232, 232);
  border-image: initial;
`;

export const BookProgressNumber = styled.h3`
  font-size: 2rem;
  font-weight: 100;
`;

export const BookProgressStatus = styled.h4`
  font-weight: 100;
`;

export const BookProgressText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  width: 50%;
`;

export const CurrentChapter = styled.h3`
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 300;
  color: #888888;
`;

export const ChapterNumber = styled.span``;

export const UpdateProgress = styled.button`
  margin-top: 0.5rem;
  border-radius: 2px;
  border: none;
  padding: 0.6rem 1.5rem;
  color: #fff;
  background: #2e94ff;
  text-transform: uppercase;
  cursor: pointer;
`;
