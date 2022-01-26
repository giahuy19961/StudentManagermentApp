import './App.css';
import { Switch, Route } from 'react-router-dom';
import { PageNotFound, PrivateRoute } from './components/common';
import { AdminLayout } from './components/layout';
import LoginPage from './features/auth/pages/LoginPage';

function App() {
  return (
    <Switch>
      <Route path="/login" render={() => <LoginPage />} />
      <PrivateRoute path="/admin" render={() => <AdminLayout />} />
      <Route path="*" render={() => <PageNotFound />} />
    </Switch>
  );
}

export default App;
