import * as React from "react";
import {Button} from "react-bootstrap";
import {AllMessage} from "./AllMessage";

interface P {
}
interface S {
}

export class RealTime extends React.Component<P,S> {
  render(): React.ReactElement <any> {
    return (
      <div>
        <div className="real-time">
          <h2>みんなの“きゅん”</h2>
          <AllMessage />
          <Button bsStyle="warning">ホームへ</Button>
        </div>
      </div>
    );
  }
}
