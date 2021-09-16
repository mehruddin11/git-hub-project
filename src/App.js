import React from 'react';
import {BrowserRouter as 
  Router, Route, Switch} 
from 'react-router-dom'
import {Dashboard, 
  ErrorPage,Login,
  PrivateRoute,AuthWrapper} from './pages'
function App() {
  return (
    <AuthWrapper>
  <Router>
     <Switch>
      <PrivateRoute path='/' exact = {true} >
        <Dashboard/>
      </PrivateRoute>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path="*">
        <ErrorPage/>
      </Route>
    </Switch>
  </Router>
  </AuthWrapper>
  );
}

export default App;
