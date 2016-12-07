import * as React from "react";
import * as ReactDOM from "react-dom";
import {Page} from "./Page";
import {Home} from "./components/Home/Home";
import {Post} from "./components/Post/Post";
import {Search} from "./components/Search/Search";
import {Router, Route, IndexRoute} from "react-router";
import {Provider} from "react-redux";
import {rootReducer} from "../reducers/RootReducer";
import {browserHistory} from "react-router";
import {routerMiddleware} from "react-router-redux";
// import {createStore, compose, applyMiddleware} from "~react-redux~redux";
import {createStore,compose,applyMiddleware} from "redux";
// import {createStore, compose, applyMiddleware} from "react-redux";

const routes = (
  <Route path="/" component={Page}>
    <IndexRoute component={Home}/>
    <Route path="post" component={Post}/>
    <Route path="search" component={Search}/>
    {/*<Route path="*" component={NotFound} />*/}
  </Route>
)

let rm = routerMiddleware(browserHistory);
let am=applyMiddleware(rm);
let store = createStore(rotReducer, compose(am));

ReactDOM.render(
  <Provider store={store}>
    <Router >
      {routes}
    </Router>
  </Provider>,
  document.getElementById('content')
);
