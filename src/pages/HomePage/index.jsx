import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as s from './style';
import { setModalState } from '../../redux/slices/modalSlice';
import Modal from '../../components/Modal';
import { setUser } from '../../redux/slices/userSlice';

export default function HomePage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  function checkUserData() {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData) {
      dispatch(
        setModalState({
          isOpen: true,
          modalContent: 'signup',
        })
      );
      return;
    }

    dispatch(setUser(userData));
  }

  useEffect(() => {
    checkUserData();
  }, []);

  if (user?.name != null) {
    dispatch(
      setModalState({
        isOpen: false,
        modalContent: null,
      })
    );
  }

  let content;
  if (!user) {
    content = null;
  } else {
    // TODO content = ;
  }

  return (
    <s.Page>
      <Modal />
      {content}
    </s.Page>
  );
}
