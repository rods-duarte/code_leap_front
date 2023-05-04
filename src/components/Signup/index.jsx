import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as s from './style';
import { setUser } from '../../redux/slices/userSlice';

export default function SignUp() {
  const dispatch = useDispatch();
  const [data, setData] = useState({ name: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setUser({
        name: data.name,
      })
    );
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <s.Content>
      <s.Form onSubmit={handleSubmit}>
        <s.Title>Welcome to CodeLeap network!</s.Title>
        <s.Wrapper>
          <s.Label>Please enter your username</s.Label>
          <s.Input
            name="name"
            type="text"
            placeholder="username"
            onChange={handleInputChange}
          />
        </s.Wrapper>
        <s.EnterButton disabled={!data.name} type="submit">
          ENTER
        </s.EnterButton>
      </s.Form>
    </s.Content>
  );
}
