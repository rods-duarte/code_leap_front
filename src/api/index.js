import axios from 'axios';

const baseAPI = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

async function getPosts() {
  const posts = await baseAPI.get('/');
  return posts;
}

export const api = {
  getPosts,
};
