import * as React from "react";
import * as ReactDOM from "react-dom";
import {Page} from "./Page";
import {Home} from "./components/Home/Home";
import {Post} from "./components/Post/Post";
import {Search} from "./components/Search/Search";
import {Router, Route, IndexRoute} from "react-router";
import {Provider} from "react-redux";
import {rootReducer} from "../reducers/rootReducer";
import {browserHistory} from "react-router";
import {routerMiddleware} from "react-router-redux";
import {createStore, compose, applyMiddleware, Middleware} from "redux";
import {syncHistoryWithStore} from "react-router-redux";
import {Read} from "./components/Read/Read";
import {RealTime} from "./components/RealTime/RealTime";

const routes = (
  <Route path="/" component={Page}>
    <IndexRoute component={Home}/>
    <Route path="post" component={Post}/>
    <Route path="read" component={Read}/>
    <Route path="search" component={Search}/>
    <Route path="real-time" component={RealTime}/>
  </Route>
);

const store = createStore(rootReducer, compose(applyMiddleware(routerMiddleware(browserHistory) as Middleware)));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('content')
);
