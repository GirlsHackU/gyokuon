/**
 * Created by gs16051 on 2016/12/06.
 */

import * as React from "react";
import {Button} from "react-bootstrap";

interface P {
  changePage: Function;
}
interface S {
}

export class MainMenu extends React.Component<P,S> {
  render(): React.ReactElement<any> {
    return (
      <div>
        <div className="main-menu">
          <h2>放送中の番組</h2>
          <p>お便りの投稿先を選んでください</p>
          <div className="menu-list">
            <Button bsStyle="black" block onClick={this.props.changePage}>きゅん on Radio</Button><p>"きゅん"とした体験談を募集中!</p>
            <Button bsStyle="black" block>コッソリ告白</Button><p>あの人への想いをコッソリ伝えよう</p>
            <Button bsStyle="black" block>玉 音 ~Gyoku-on~</Button><p>日本中に"きゅん"が伝わっちゃう?!</p>
          </div>
        </div>
      </div>
    );
  }
}