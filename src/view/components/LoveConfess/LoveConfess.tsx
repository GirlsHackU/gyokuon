/**
 * Created by gs16051 on 2016/12/07.
 */

import * as React from "react";
import {Header} from "../../objects/Header";
import {browserHistory} from "react-router";
import {CommentForm} from "../Post/CommentForm";
import {LatestPost} from "../RealTime/LatestPost";
import {Button} from "~react-bootstrap/src/Button";

interface P {
}
interface S {
}

export class LoveConfess extends React.Component<P,S> {
  goRead(): void {
    browserHistory.push('read');
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
          <div className="post">
            <h2>コッソリ告白</h2>
            <p>あなたの想いを匿名で伝えます。</p>
            <CommentForm handleCommentSubmit={this.goRead.bind(this)}
                         goRead={this.goRead.bind(this)}
                         goHome={this.goHome.bind(this)}/>
            <div className="real-time-post">
              <LatestPost/>
              <Button onClick={this.readMore.bind(this)}>more...</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

