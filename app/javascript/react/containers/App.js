import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import CompanyList from './CompanyList';
import CompanyTile from '../components/CompanyTile';
import CompanyProfile from './CompanyProfile';
import UserProfile from './UserProfile';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={CompanyList} />
      <Route path='/?' component={CompanyList} />
      <Route path='/companies' component={CompanyList} />
      <Route path='/companies/:id' component={CompanyProfile} />
      <Route path='/:users/:id' component={UserProfile} />
    </Router>
  );
}
export default App;
