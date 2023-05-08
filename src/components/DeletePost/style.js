import styled from 'styled-components';

export const DeletePost = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 22px;
`;

export const Buttons = styled.div`
  & button {
    width: 120px;
    height: 32px;
    border-radius: 8px;
    border: none;

    cursor: pointer;

    font-weight: 700;
  }

  margin-left: auto;

  display: flex;
  column-gap: 15px;
`;

export const CancelButton = styled.button`
  border: 1px solid #999999;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const ConfirmButton = styled.button`
  background-color: #ff5151;
  color: #fff;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;
