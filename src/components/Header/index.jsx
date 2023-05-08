import { BiLogOut } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { resetUser, setUser } from '../../redux/slices/userSlice';
import * as s from './style';
import { setModalState } from '../../redux/slices/modalSlice';

export default function Header() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(resetUser());

    dispatch(
      setModalState({
        isOpen: true,
        modalContent: 'signup',
      })
    );
  };

  return (
    <s.Header>
      <s.Content>
        <h1>CodeLeap Network</h1>
        <s.Logout type="button" onClick={logout}>
          <BiLogOut />
        </s.Logout>
      </s.Content>
    </s.Header>
  );
}
