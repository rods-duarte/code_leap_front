import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;

  & button {
    font-size: 25px;
    background-color: #0000;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: #fff;
  }

  & button:hover {
    color: #ddd;
    cursor: pointer;
    scale: 1.1;
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s;
  }
`;
