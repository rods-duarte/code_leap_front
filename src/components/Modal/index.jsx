import { useSelector } from 'react-redux';
import * as s from './style';
import SignUp from '../Signup';
import DeletePost from '../DeletePost';
import EditPost from '../EditPost';

export default function Modal() {
  const { isOpen, modalContent, data } = useSelector((state) => state.modal);
  if (!isOpen) {
    return null;
  }

  let content = null;
  if (modalContent === 'signup') {
    content = <SignUp />;
  } else if (modalContent === 'deletePost') {
    content = <DeletePost data={data} />;
  } else if (modalContent === 'editPost') {
    content = <EditPost data={data} />;
  }

  return (
    <s.Wrapper>
      <s.Content>{content}</s.Content>
    </s.Wrapper>
  );
}
