import { useSelector } from 'react-redux';
import * as s from './style';
import SignUp from '../Signup';

export default function Modal() {
  const { isOpen, modalContent } = useSelector((state) => state.modal);

  if (!isOpen) {
    return null;
  }

  let content = null;
  if (modalContent === 'signup') {
    content = <SignUp />;
  }

  return (
    <s.Wrapper>
      <s.Content>{content}</s.Content>
    </s.Wrapper>
  );
}
