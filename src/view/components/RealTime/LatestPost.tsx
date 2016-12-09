/**
 * Created by gs16051 on 2016/12/09.
 */
import * as React from "react";
import request = require("superagent");
import {Message} from "./Message";
import {Button} from "react-bootstrap";

interface P {
  readMore: Function;
}
interface S {
  latestPost: string;
  timerId: number;
}

export class LatestPost extends React.Component<P,S> {
  render(): React.ReactElement <any> {
    return (
      <div>
        <div className="recent-message">
          <img src="/images/radio.png" alt="radio"/>
          <Message />
          <Button onClick={this.props.readMore}>more...</Button>
        </div>
      </div>
    );
  }
}
