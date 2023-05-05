import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #7695ec;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;

  & > h1 {
    color: #fff;
    font-size: 22px;
    font-weight: 700;
  }
`;
