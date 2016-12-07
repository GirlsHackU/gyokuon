import * as React from "react";
import {Header} from "../../objects/Header";

interface P {
}
interface S {
}

export class Recent extends React.Component<P,S> {

  render(): React.ReactElement<any> {
    return (
      <div>
        <Header />
        <div className="home">
          <h1>じぶんが投稿した“きゅん”</h1>
          <p>検索機能を実装する</p>
        </div>
      </div>
    );
  }
}
