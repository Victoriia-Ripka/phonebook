import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { AppBar, Toolbar, Grid } from '@mui/material';

export const AppBarHeader = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <AppBar>
        <Toolbar sx={{ height: 90, display: 'flex' }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
