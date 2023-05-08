import { IoCreate } from 'react-icons/io5';
import { TbTrashXFilled } from 'react-icons/tb';

import { useDispatch } from 'react-redux';

import * as s from './style';
import { setModalState } from '../../redux/slices/modalSlice';

export default function PostButtons({ postId }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(
      setModalState({
        isOpen: true,
        modalContent: 'deletePost',
        data: { postId },
      })
    );
  };

  function handleEdit() {}

  return (
    <s.Buttons>
      <button type="button" onClick={handleDelete}>
        <TbTrashXFilled />
      </button>
      <button type="button">
        <IoCreate />
      </button>
    </s.Buttons>
  );
}
