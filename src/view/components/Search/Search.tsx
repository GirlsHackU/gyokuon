import * as React from "react";
import {Header} from "../../objects/Header";

interface P {
}
interface S {
}

export class Search extends React.Component<P,S> {

  render(): React.ReactElement<any> {
    return (
      <div>
        <Header />
        <div className="home">
          <h1>検索</h1>
          <p>検索機能を実装する</p>
        </div>
      </div>
    );
  }
}
