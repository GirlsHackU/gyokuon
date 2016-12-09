import * as React from "react";
import {Button} from "react-bootstrap";
import {browserHistory} from "react-router";
import {Message} from "./Message";
import {Header} from "../../objects/Header";

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
        <Header />
        <div className="real-time">
          <h2>みんなの“きゅん”</h2>
          <Message />
          <Button bsStyle="warning" onClick={this.goHome.bind(this)}>ホームへ</Button>
        </div>
      </div>
    );
  }
}
