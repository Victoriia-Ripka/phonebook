import { Outlet } from 'react-router-dom';
import { AppBarHeader } from './AppBar/AppBar';
import { Suspense } from 'react';
// import { Box } from '@mui/material';
// import { Toaster } from 'react-hot-toast';

export default function Layout() {
  return (
    <>
      <AppBarHeader />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
