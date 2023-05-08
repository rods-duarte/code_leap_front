import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #7695ec;

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    color: #fff;
    font-size: 22px;
    font-weight: 700;
  }
`;

export const Logout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #0000;
  border: none;
  color: #fff;
  font-size: 22px;

  cursor: pointer;

  &:hover {
    color: #ddd;
    scale: 1.1;
    transition: scale cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s;
  }
`;
