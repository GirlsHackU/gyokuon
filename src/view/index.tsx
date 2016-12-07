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


ReactDOM.render(
  <Post />,
  document.getElementById('content')
);
