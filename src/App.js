import React from 'react';
import CreateLink from './containers/CreateLink';
import LinkList from './containers/LinkList';
import Header from './components/Header';
import { Route, Switch, Redirect } from 'react-router';
import Login from './containers/Login';
import Search from './containers/Search';

const App = () => (
  <div className='center w85'>
    <Header />
    <div className='ph3 pv1 background-gray'>
      <Switch>
        <Route exact path='/' component={LinkList} />
        <Route exact path='/create' component={CreateLink} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/top' component={LinkList} />
        <Route exact path='/new/:page' component={LinkList} />
      </Switch>
    </div>
  </div>
);

export default App;
