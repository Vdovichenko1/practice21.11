import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectorLogIn } from 'redux/auth/authSelector';

export const PrivateRoute = ({ redirectTo = '/' }) => {
  const isLogIn = useSelector(selectorLogIn);
  return isLogIn ? <Outlet /> : <Navigate to={redirectTo} />;
};
