import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { setModalState } from '../../redux/slices/modalSlice';
import { setPosts } from '../../redux/slices/postsSlice';

import { api } from '../../api';
import * as s from './style';

export default function DeletePost({ data }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { posts } = useSelector((store) => store.posts);

  const closeModal = () => {
    dispatch(
      setModalState({
        isOpen: false,
        content: null,
        data: null,
      })
    );
  };

  const handleDelete = () => {
    setLoading(true);
    api
      .deletePost(data.postId)
      .then(() => {
        dispatch(
          setPosts({
            posts: posts.filter((post) => post.id !== data.postId),
          })
        );
      })
      .finally(() => {
        setLoading(false);
        closeModal();
      });
  };

  return (
    <s.DeletePost>
      <s.Title>Are you sure you want to delete this item?</s.Title>
      <s.Buttons>
        <s.CancelButton type="button" onClick={closeModal} disabled={loading}>
          Cancel
        </s.CancelButton>
        <s.ConfirmButton
          type="button"
          onClick={handleDelete}
          disabled={loading}
        >
          Delete
        </s.ConfirmButton>
      </s.Buttons>
    </s.DeletePost>
  );
}
