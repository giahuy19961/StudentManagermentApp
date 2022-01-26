import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { authActions } from '../../features/auth/authSlice';
import { useAppDispatch } from '../../app/hooks';

interface INavbarProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export function Navbar(props: INavbarProps) {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Student Managerment
          </Typography>
          {isLoggedIn ? (
            <Button color="inherit" onClick={() => dispatch(authActions.logout())}>
              Log out
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={() =>
                dispatch(authActions.login({ username: 'GiaHuy', password: '123456' }))
              }
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
