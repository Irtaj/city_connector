import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import CompanyList from './CompanyList';
import CompanyTile from '../components/CompanyTile';
import CompanyProfile from './CompanyProfile';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={CompanyList} />
      <Route path='/companies' component={CompanyList} />
      <Route path='/companies/:id' component={CompanyProfile} />
    </Router>
  );
}
export default App;
