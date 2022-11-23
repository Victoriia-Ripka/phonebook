import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
// import { AppBar, Toolbar, Box } from '@mui/material';

export const AppBarHeader = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {/* <AppBar>
        <Toolbar>
          <Box sx={{ display: { sm: 'block', coor: 'white' } }}> */}
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          {/* </Box>
        </Toolbar>
      </AppBar> */}
    </>
  );
};
