import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../../redux/slices/postsSlice';

import Post from '../Post';

import { api } from '../../api';
import * as s from './style';

export default function Posts() {
  const dispatch = useDispatch();
  const { posts } = useSelector((store) => store.posts);

  useEffect(() => {
    api.getPosts().then((response) => {
      dispatch(setPosts({ posts: response.data.results }));
    });
  }, []);

  const content = posts.map((post) => <Post key={post.id} data={post} />);

  return <s.Posts>{content}</s.Posts>;
}
