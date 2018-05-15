import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import CompanyList from './CompanyList';
import CompanyTile from '../components/CompanyTile';
import CompanyProfile from './CompanyProfile';
import ResourceList from './ResourceList';
import UserProfile from './UserProfile';
import ChatContainer from './ChatContainer';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={CompanyList} />
      <Route path='/?' component={CompanyList} />
      <Route path='/companies' component={CompanyList} />
      <Route path='/companies/:id' component={CompanyProfile} />
      <Route path='/resources' component={ResourceList} />
      <Route path='/:users/:id' component={UserProfile} />
      <Route path='chats/:id' component={ChatContainer}/>
    </Router>
  );
}
export default App;
