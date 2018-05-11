import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import UserProfile from './UserProfile';

const AppUser = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/users/:id' component={UserProfile} />
    </Router>
  );
}
export default AppUser;
