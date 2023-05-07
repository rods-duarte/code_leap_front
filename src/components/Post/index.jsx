import { useSelector } from 'react-redux';

import PostButtons from '../PostButtons';

import * as s from './style';

export default function Post({ data }) {
  const { name } = useSelector((store) => store.user);
  const isAuthor = name === data.username;
  const timePassedInSeconds =
    (new Date().getTime() - new Date(data.created_datetime).getTime()) / 1000;

  const formatTime = (timeInSeconds) => {
    const minuteInSeconds = 60;
    const hourInSeconds = 60 * minuteInSeconds;
    const dayInSeconds = 24 * hourInSeconds;

    if (timeInSeconds < 1) {
      return 'Just now';
    }
    if (timeInSeconds < minuteInSeconds) {
      return `${Math.floor(timeInSeconds)} seconds ago`;
    }
    if (timeInSeconds < hourInSeconds) {
      const minutes = Math.floor(timeInSeconds / minuteInSeconds);
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    }
    if (timeInSeconds < dayInSeconds) {
      const hours = Math.floor(timeInSeconds / hourInSeconds);
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    }
    const days = Math.floor(timeInSeconds / dayInSeconds);
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  };

  return (
    <s.Post id={data.id}>
      <s.Header>
        <h1>{data.title}</h1>
        {isAuthor && <PostButtons postId={data.id} />}
      </s.Header>
      <s.Content>
        <s.Author>
          <span>@{data.username}</span>
          <span>{formatTime(timePassedInSeconds)}</span>
        </s.Author>
        <s.Text>{data.content}</s.Text>
      </s.Content>
    </s.Post>
  );
}
