/**
 * Created by gs16051 on 2016/12/07.
 */

import * as React from "react";
import {CommentBox} from "./CommentBox";
import {Header} from "../../objects/Header";
import {browserHistory} from "react-router";

interface P {
}
interface S {
}

export class Post extends React.Component<P,S> {
  post(): void {
    browserHistory.push('read');
  }
  readMore(): void {
    browserHistory.push('real-time');
  }
  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <CommentBox post={this.post.bind(this)} readMore={this.readMore.bind(this)} />
        </div>
      </div>
    )
  }
}

