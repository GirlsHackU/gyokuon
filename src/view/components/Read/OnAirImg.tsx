import * as React from "react";
import {Header} from "../../objects/Header";
import {ReadMenu} from "./ReadMenu";

interface P {
}
interface S {
}

export class OnAirImg extends React.Component<P,S> {

  render(): React.ReactElement<any> {
    return (
      <div>
        <div className="on-air-img">
          <h2>きゅんonRadio</h2>
          <p>Now on Air</p>
          <div className="read">
            <p>PN:suneoさんからの投稿です。今日学校へ行ったら…(内容を表示)</p>
            <img src="../images/on-air.gif" alt="on-air" />
          </div>
        </div>
      </div>
    );
  }
}
