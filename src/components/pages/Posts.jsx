import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from 'redux/posts/postsOperations';

export default function Posts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return <div>Posts</div>;
}
