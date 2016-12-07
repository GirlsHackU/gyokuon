import * as React from "react";
import {Header} from "../../objects/Header";

interface P {
}
interface S {
}

export class Read extends React.Component<P,S> {

  render(): React.ReactElement<any> {
    return (
      <div>
        <Header />
        <div className="home">
          <h1>お便りの読み上げ</h1>
          <p>検索機能を実装する</p>
        </div>
      </div>
    );
  }
}
