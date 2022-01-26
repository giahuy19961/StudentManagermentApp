import { Box, makeStyles, Theme } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routeAdmin } from '../../routes';
import { Navbar, Sidebar } from '../common';

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '280px 1fr',
    gridTemplateRows: '64px 1fr',
    gridTemplateAreas: '"navbar navbar" "sidebar main"',
    minHeight: '100vh',
  },
  navbar: {
    gridArea: 'navbar',
  },
  sidebar: {
    gridArea: 'sidebar',
  },
  main: {
    gridArea: 'main',
    padding: theme.spacing(3),
  },
}));

export function AdminLayout({}: Props): ReactElement {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.navbar}>
        <Navbar />
      </Box>
      <Box className={classes.sidebar}>
        <Sidebar />
      </Box>
      <Box className={classes.main}>
        <Switch>
          {routeAdmin.map(({ Component, ...rest }, index) => (
            <Route key={index} path={rest.path} render={() => <Component />} />
          ))}
        </Switch>
      </Box>
    </Box>
  );
}
