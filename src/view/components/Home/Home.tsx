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
          <Button>きゅん on Radio</Button>
          <Button>コッソリ告白</Button>
          <Button>玉 音</Button>
        </div>
      </div>
    );
  }
}
