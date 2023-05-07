import styled from 'styled-components';

export const CreatePost = styled.div`
  width: 90%;
  height: fit-content;
  position: relative;
  margin: 0 auto;
  padding: 0 15px;
  padding-bottom: 20px;
  padding-top: 20px;

  border: 1px solid #999999;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
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
  background-color: #7695ec;
  border-radius: 8px;
  border: none;
  color: #fff;
  margin-left: auto;
  opacity: 0.8;

  cursor: pointer;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const Label = styled.label``;
