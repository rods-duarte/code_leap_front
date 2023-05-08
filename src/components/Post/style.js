import styled from 'styled-components';

export const Post = styled.div`
  width: 90%;
  height: fit-content;
  position: relative;
  margin: 0 auto;
  padding-top: 75px;
  padding-bottom: 20px;

  border: 1px solid #999999;
  border-radius: 16px;

  opacity: 0;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      top: 100px;
    }

    100% {
      opacity: 1;
      top: 0;
    }
  }

  @keyframes flash {
    0% {
      background-color: #0000;
    }

    100% {
      background-color: #7695ec;
    }
  }

  &.visible,
  &:first-child {
    opacity: 1;
    animation: fadeIn 0.5s ease-in-out forwards;
  }

  &.update > header {
    animation: flash 0.5s ease-out forwards;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 70px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #7695ec;
  color: #fff;
  word-wrap: break-word;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border-radius: 16px 16px 0px 0px;

  & h1 {
    font-size: 22px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 15px;
  margin-top: 15px;
  padding: 0 15px;

  font-size: 18px;
  word-wrap: break-word;
`;

export const Author = styled.div`
  display: flex;
  justify-content: space-between;
  color: #777777;

  & span:first-child {
    font-weight: 700;
  }
`;

export const Text = styled.span`
  line-height: 21px;
`;
