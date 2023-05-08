import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { setModalState } from '../../redux/slices/modalSlice';
import { setUser } from '../../redux/slices/userSlice';

import Modal from '../../components/Modal';
import Header from '../../components/Header';
import Posts from '../../components/Posts';
import CreatePost from '../../components/CreatePost';

import * as s from './style';

export default function HomePage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  const checkUserData = () => {
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
  };

  useEffect(() => {
    checkUserData();
  }, []);

  let content;
  if (!user?.name) {
    content = null;
  } else {
    content = (
      <>
        <Header />
        <CreatePost />
        <Posts />
      </>
    );
  }

  return (
    <s.Page>
      <Modal />
      {content}
    </s.Page>
  );
}
