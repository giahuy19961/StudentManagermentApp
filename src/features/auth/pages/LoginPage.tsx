import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { Navbar } from '../../../components/common';
import { authActions } from '../authSlice';

interface LoginPageProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  box: {
    padding: theme.spacing(2),
  },
}));

function LoginPage({}: LoginPageProps): ReactElement {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
  };
  return (
    <>
      <Navbar />
      <Paper className={classes.root}>
        <Typography variant="h5" component="h1">
          Login Page
        </Typography>
        <Box mt={4} className={classes.box}>
          <Button onClick={handleLogin} fullWidth variant="contained" color="primary">
            Fake Login
          </Button>
        </Box>
      </Paper>
    </>
  );
}

export default LoginPage;
