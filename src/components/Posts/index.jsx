import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post';
import * as s from './style';
import { setPosts } from '../../redux/slices/postsSlice';
import { api } from '../../api';

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
