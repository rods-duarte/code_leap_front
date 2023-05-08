import axios from 'axios';

const baseAPI = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

async function getPosts(offset = 0) {
  const posts = await baseAPI.get(`/?limit=10&offset=${offset}`);
  return posts;
}

async function createPost(postData) {
  await baseAPI.post('/', postData);
}

async function updatePost(postId, postData) {
  await baseAPI.patch(`/${postId}/`, postData);
}

async function deletePost(postId) {
  await baseAPI.delete(`/${postId}/`);
}

export const api = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
