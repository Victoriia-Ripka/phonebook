import { Outlet } from 'react-router-dom';
import { AppBarHeader } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Box, Container } from '@mui/material';
// import { Toaster } from 'react-hot-toast';

export default function Layout() {
  return (
    <Box>
      <AppBarHeader />
      <Box component="main" sx={{ pt: 15 }}>
        <Container maxWidth="sm">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
    </Box>
  );
}
