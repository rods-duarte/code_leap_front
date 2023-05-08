import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import PostButtons from '../PostButtons';

import * as s from './style';

export default function Post({ data }) {
  const { name } = useSelector((store) => store.user);
  const [isVisible, setIsVisible] = useState(false);
  const postRef = useRef(null);
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

  const handleScroll = () => {
    const { top } = postRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (top < windowHeight * 0.8) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <s.Post ref={postRef} id={data.id} className={isVisible ? 'visible' : ''}>
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
