import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../../redux/slices/postsSlice';

import Post from '../Post';

import { api } from '../../api';
import * as s from './style';

export default function Posts() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { posts } = useSelector((store) => store.posts);

  const getPosts = (pageNum) => {
    api.getPosts(pageNum * 10).then((response) => {
      dispatch(setPosts({ posts: [...posts, ...response.data.results] }));
    });
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    getPosts(page);
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = posts.map((post) => <Post key={post.id} data={post} />);

  return <s.Posts>{content}</s.Posts>;
}
