import * as React from "react";
import {Header} from "../../objects/Header";

interface P {
}
interface S {
}

export class RealTime extends React.Component<P,S> {

  render(): React.ReactElement<any> {
    return (
      <div>
        <Header />
        <div className="real-time">
          <h1>みんなの“きゅん”</h1>
          <ul>
            <li>xxxさん：昨日…(内容を書く)</li>
          </ul>
        </div>
      </div>
    );
  }
}
