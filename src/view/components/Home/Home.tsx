import * as React from "react";
import {Button} from "react-bootstrap";
import {Header} from "../../objects/Header";

interface P {
}
interface S {
}

export class Home extends React.Component<P,S> {

  render(): React.ReactElement<any> {
    return (
      <div>
        <Header />
        <div className="home">
          <h1>放送中の番組</h1>
          <Button bsStyle="black" block>きゅん on Radio</Button>
          <Button bsStyle="black" block>コッソリ告白</Button>
          <Button bsStyle="black" block>玉 音</Button>
        </div>
      </div>
    );
  }
}
