import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { setModalState } from '../../redux/slices/modalSlice';
import { setPosts } from '../../redux/slices/postsSlice';

import { api } from '../../api';
import * as s from './style';

export default function EditPost({ data }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState({ title: null, content: null });
  const isDisable = !inputData.title || !inputData.content;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    api
      .updatePost(data.postId, inputData)
      .then(() => {
        dispatch(
          setPosts({
            posts: posts.map((post) => {
              if (post.id === data.postId) {
                return {
                  ...post,
                  title: inputData.title,
                  content: inputData.content,
                };
              }
              return post;
            }),
          })
        );
      })
      .finally(() => {
        setLoading(false);
        closeModal();
      });
  };

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <s.EditPost>
      <s.Title>Edit Item</s.Title>
      <s.Form onSubmit={handleSubmit}>
        <s.Label htmlFor="post_title">Title</s.Label>
        <s.Input
          id="post_title"
          type="text"
          name="title"
          placeholder="Hello world"
          value={data.title}
          disabled={loading}
          onChange={handleInputChange}
        />
        <s.Label htmlFor="post_content">Content</s.Label>
        <s.Textarea
          id="post_content"
          type="text"
          name="content"
          placeholder="Content here"
          value={data.content}
          disabled={loading}
          onChange={handleInputChange}
        />
        <s.Buttons>
          <s.CancelButton type="button" onClick={closeModal} disabled={loading}>
            Cancel
          </s.CancelButton>
          <s.ConfirmButton type="submit" disabled={loading || isDisable}>
            Save
          </s.ConfirmButton>
        </s.Buttons>
      </s.Form>
    </s.EditPost>
  );
}
