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
  goRead(id:string, author:string, text:string): void {
    browserHistory.push('read/' + id + '/' + author + '/' + text);
  }
  readMore(): void {
    browserHistory.push('real-time');
  }
  goHome(): void {
    browserHistory.push('/');
  }
  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <CommentBox goRead={this.goRead.bind(this)} readMore={this.readMore.bind(this)} goHome={this.goHome.bind(this)} />
        </div>
      </div>
    )
  }
}

