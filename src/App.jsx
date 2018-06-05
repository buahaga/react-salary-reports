import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';
import MainReport from './containers/main-report/MainReport';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  const currentYear = new Date().getFullYear();
  return (<Provider store={store}>
    <Router>
      <Switch>
        <Route path="/:year/:tab" component={MainReport}/>
        <Redirect from="/" to={`/${currentYear}/tech`}/>
      </Switch>
    </Router>
  </Provider>);
};

export default App;
