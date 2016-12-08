import * as React from "react";
import {Header} from "../../objects/Header";
import {ReadMenu} from "./ReadMenu";
import {Button} from "react-bootstrap";

interface P {
}
interface S {
}

export class OnAirImg extends React.Component<P,S> {

  render(): React.ReactElement<any> {
    return (
      <div>
        <div className="read">
          <h2>きゅんonRadio</h2>
          <p>Now on Air</p>
          <div className="on-air-message">
            <p>PN:suneoさんからの投稿です。今日学校へ行ったら…(内容を表示)</p>
            <div className="read-select-btn">
              <Button bsStyle="success">修正する</Button>
              <Button bsStyle="info">Tweetする</Button>
              <Button bsStyle="warning">ホームへ</Button>
            </div>
            <img src="../images/on-air.gif" alt="on-air"/>
          </div>
        </div>
      </div>
    );
  }
}
