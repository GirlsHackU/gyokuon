import * as React from "react";
import {Button} from "react-bootstrap";
import {LatestPost} from "./LatestPost";

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
          <LatestPost />
          <Button bsStyle="warning">ホームへ</Button>
        </div>
      </div>
    );
  }
}
