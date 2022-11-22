import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectorLogIn } from 'redux/auth/authSelector';

export const RestrictedRoute = ({ redirectTo = '/', restricted }) => {
  const isLogIn = useSelector(selectorLogIn);
  return isLogIn && restricted ? <Navigate to={redirectTo} /> : <Outlet />;
};
