import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/main';

import ResistTable from './resist-table/resist-table'

const App = () => {

  return (
	  <Switch>
      <Route
        path="/"
        component={Main}
        exact />
      <Route
        path="/table"
        component={ResistTable}
        exact />
	  </Switch>
  );
};


export default App;
