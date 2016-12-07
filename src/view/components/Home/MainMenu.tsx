/**
 * Created by gs16051 on 2016/12/06.
 */

import * as React from "react";
import {Button} from "react-bootstrap";

interface P {
  changePage:Function;
}
interface S {
}

export class MainMenu extends React.Component<P,S> {
  render(): React.ReactElement<any> {
    return (
      <div>
        <div className="main-menu">
          <h2>放送中の番組</h2>
          <Button bsStyle="black" block onClick={this.props.changePage}>きゅん on Radio</Button>
          <Button bsStyle="black" block>コッソリ告白</Button>
          <Button bsStyle="black" block>玉 音 ~Gyoku-on~</Button>
        </div>
      </div>
    );
  }
}