import React, { ReactElement } from 'react';
import { Redirect, Route } from 'react-router';
import { RouteProps } from 'react-router-dom';

interface Props {}

export function PrivateRoute(props: RouteProps) {
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  if (!isLoggedIn) return <Redirect to="/login" />;
  return <Route {...props} />;
}
