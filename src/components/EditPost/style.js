import styled from 'styled-components';

export const EditPost = styled.div`
  width: 100%;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  row-gap: 8px;
`;

export const Input = styled.input`
  border: 1px solid #777777;
  border-radius: 8px;
  height: 32px;
  padding-left: 5px;

  &:last-child {
    height: 74px;
  }
`;

export const Textarea = styled.textarea`
  border: 1px solid #777777;
  border-radius: 8px;
  height: 74px;
  padding-left: 5px;
  padding-top: 5px;

  resize: none;
`;

export const ConfirmButton = styled.button`
  width: 120px;
  height: 32px;
  background-color: #47b960;
  border-radius: 8px;
  border: none;
  color: #fff;
  margin-left: auto;
  opacity: 0.8;

  cursor: pointer;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const CancelButton = styled.button`
  border: 1px solid #999999;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const Label = styled.label``;
