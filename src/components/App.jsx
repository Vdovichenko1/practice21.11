import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';
import { selectorRefresh } from 'redux/auth/authSelector';
import Layout from './Layout';
import { PrivateRoute } from './Routes/PrivateRoute';
import { RestrictedRoute } from './Routes/RestrictedRoute';

const Home = lazy(() => import('./pages/Home'));
const Auth = lazy(() => import('./pages/Auth'));
const Posts = lazy(() => import('./pages/Posts'));

export const App = () => {
  const dispatch = useDispatch();
  const refresh = useSelector(selectorRefresh);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return refresh ? (
    <h1>Loading...</h1>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="auth"
          element={<RestrictedRoute redirectTo="/posts" restricted />}
        >
          <Route index element={<Auth />} />
        </Route>
        <Route path="posts" element={<PrivateRoute redirectTo="/auth" />}>
          <Route index element={<Posts />} />
        </Route>
      </Route>
    </Routes>
  );
};
