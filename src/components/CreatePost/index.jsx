import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as s from './style';
import { api } from '../../api';
import { setPosts } from '../../redux/slices/postsSlice';

export default function CreatePost() {
  const dispatch = useDispatch();
  const { name } = useSelector((store) => store.user);
  const [data, setData] = useState({
    title: '',
    content: '',
  });
  const isDisable = !data.title || !data.content;

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .createPost({ ...data, username: name })
      .then(() => {
        api.getPosts().then((response) => {
          dispatch(setPosts({ posts: response.data.results }));
        });
      })
      .finally(() => {
        setData({ title: '', content: '' });
      });
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <s.CreatePost>
      <s.Title>What&apos;s on your mind?</s.Title>
      <s.Form onSubmit={handleSubmit}>
        <s.Label htmlFor="post_title">Title</s.Label>
        <s.Input
          id="post_title"
          type="text"
          name="title"
          placeholder="Hello world"
          value={data.title}
          onChange={handleInputChange}
        />
        <s.Label htmlFor="post_content">Content</s.Label>
        <s.Textarea
          id="post_content"
          type="text"
          name="content"
          placeholder="Content here"
          value={data.content}
          onChange={handleInputChange}
        />
        <s.ConfirmButton type="submit" disabled={isDisable}>
          Create
        </s.ConfirmButton>
      </s.Form>
    </s.CreatePost>
  );
}
