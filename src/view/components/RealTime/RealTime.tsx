import * as React from "react";
import {Button} from "react-bootstrap";
import {AllMessage} from "./AllMessage";
import {browserHistory} from "react-router";

interface P {
}
interface S {
}

export class RealTime extends React.Component<P,S> {
  goHome(): void {
    browserHistory.push("/");
  }
  render(): React.ReactElement <any> {
    return (
      <div>
        <div className="real-time">
          <h2>みんなの“きゅん”</h2>
          <AllMessage />
          <Button bsStyle="warning" onClick={this.goHome.bind(this)}>ホームへ</Button>
        </div>
      </div>
    );
  }
}
