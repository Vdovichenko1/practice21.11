import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/auth">Auth</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
