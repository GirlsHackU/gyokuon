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
import {createStore, compose, applyMiddleware} from "redux";
import {syncHistoryWithStore} from "react-router-redux";

const routes = (
    <Route path="/" component={Page}>
        <IndexRoute component={Home}/>
        <Route path="post" component={Post}/>
        <Route path="search" component={Search}/>
    </Route>
);

const store = createStore(rootReducer, compose(applyMiddleware(routerMiddleware(browserHistory))));
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('content')
)
;
