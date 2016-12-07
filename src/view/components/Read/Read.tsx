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
        <div className="read">
          <h1>きゅんonRadio</h1>
        </div>
      </div>
    );
  }
}
