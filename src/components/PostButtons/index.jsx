import { IoCreate } from 'react-icons/io5';
import { TbTrashXFilled } from 'react-icons/tb';

import * as s from './style';

export default function PostButtons({ postId }) {
  function handleDelete() {}

  function handleEdit() {}

  return (
    <s.Buttons>
      <button type="button">
        <TbTrashXFilled />
      </button>
      <button type="button">
        <IoCreate />
      </button>
    </s.Buttons>
  );
}
