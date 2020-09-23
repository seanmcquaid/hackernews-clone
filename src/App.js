import React from 'react';
import CreateLink from './containers/CreateLink';
import LinkList from './containers/LinkList';
import Header from './components/Header';
import { Route, Switch } from 'react-router';

const App = () => (
  <div className='center w85'>
    <Header />
    <div className='ph3 pv1 background-gray'>
      <Switch>
        <Route exact path='/' component={LinkList} />
        <Route exact path='/create' component={CreateLink} />
      </Switch>
    </div>
  </div>
);

export default App;
