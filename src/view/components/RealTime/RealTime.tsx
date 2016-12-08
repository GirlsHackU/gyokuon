import * as React from "react";
import {Header} from "../../objects/Header";
import {Button} from "react-bootstrap";
import {browserHistory} from "react-router";

interface P {
}
interface S {
}

export class RealTime extends React.Component<P,S> {
  changePage(): void {
    browserHistory.push('/');
  }
  render(): React.ReactElement<any> {
    return (
      <div>
        <Header />
        <div className="real-time">
          <h1>みんなの“きゅん”</h1>
          <ul>
            <li>xxxさん：昨日…(内容を書く)</li>
          </ul>
          <Button bsStyle="warning" onClick={this.changePage.bind(this)}>ホームへ</Button>
        </div>
      </div>
    );
  }
}
