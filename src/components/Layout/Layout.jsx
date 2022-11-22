import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectorLogIn } from 'redux/auth/authSelector';

export default function Layout() {
  const isLogIn = useSelector(selectorLogIn);
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLogIn ? (
          <NavLink to="/posts">Posts</NavLink>
        ) : (
          <NavLink to="/auth">Auth</NavLink>
        )}
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
