/* eslint-disable */
import styled from "styled-components";

export const NewBookWrapper = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 30vh;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3rem;
  .data-wrapper {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    gap: 2rem;
    @media screen and (max-width: 768px) {
      width: 100%;
      grid-template-columns: 1fr;
    }
  }
`;

export const SectionTitle = styled.h2`
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const NewBookName = styled.input`
  padding: 0.6rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const NewAutherName = styled.input`
  padding: 0.6rem;
  width: 15rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NewBookType = styled.div``;

export const SubmitBook = styled.button`
  background: #2e94ff;
  border: none;
  padding: 0.6rem 1.5rem;
  color: #fff;
`;
