import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 4;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 80%;
  min-height: fit-content;
  border: 1px solid #cccccc;
  border-radius: 16px;
  margin: 0 auto;
  background-color: #ffffff;
  opacity: 1;
  z-index: 4;
  position: relative;
`;
