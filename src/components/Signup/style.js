import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 205px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  row-gap: 15px;
`;

export const EnterButton = styled.button`
  width: 111px;
  height: 32px;
  color: #fff;
  background-color: #7695ec;
  border-radius: 8px;
  border: none;
  margin-left: auto;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  cursor: pointer;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 22px;
  font-weight: 700;
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const Input = styled.input`
  height: 32px;
  border: 1px solid #777777;
  border-radius: 8px;
  padding-left: 10px;
`;
