import styled from 'styled-components';

export const NavbarNav = styled.nav`
  min-height: 10vh;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  border-bottom: 1px solid rgb(232, 232, 232);
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  gap: 3rem;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
  a {
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-size: 0.8rem;
  }
  .logo a {
    color: #2e94ff;
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: 0;
    text-transform: initial;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const UserProfile = styled.div`
  button {
    background: none;
    border: none;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;

    img {
      padding: 1rem;
      width: 35%;
      border: 1px solid rgb(232, 232, 232);
      border-radius: 100px;
      transition: all 0.3s ease;
      &:hover {
        background-color: rgb(232, 232, 232);
      }
      @media screen and (max-width: 768px) {
        width: 50%;
      }
    }
  }
`;
