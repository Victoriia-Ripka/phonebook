import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { TextField, Button, Grid } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget.elements[0].value, e.currentTarget.elements[2].value, e.currentTarget.elements[4].value,)
    dispatch(
      register({
        name: e.currentTarget.elements[0].value,
        email: e.currentTarget.elements[2].value,
        password: e.currentTarget.elements[4].value,
        subscription: 'pro',
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={6} md={8}>
          <TextField
            required
            id="outlined-name-required"
            label="Name"
            type="text"
          />
        </Grid>
        <Grid item xs={6} md={8}>
          <TextField
            required
            id="outlined-email-required"
            label="Email"
            type="email"
          />
        </Grid>
        <Grid item xs={6} md={8}>
          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
          />
        </Grid>
        <Grid item xs={6} md={8}>
          <Button variant="outlined" type="submit">
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
