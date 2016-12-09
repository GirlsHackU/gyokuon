/**
 * Created by gs16051 on 2016/12/09.
 */
import * as React from "react";
import request = require("superagent");
import {Message} from "./Message";

interface P {
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
          <img src="../images/radio.png" alt="radio"/>
          <Message />
        </div>
      </div>
    );
  }
}
