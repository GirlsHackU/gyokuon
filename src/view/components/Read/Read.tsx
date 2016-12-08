import * as React from "react";
import {Header} from "../../objects/Header";
import {ReadMenu} from "./ReadMenu";
import {OnAirImg} from "./OnAirImg";

interface P {
}
interface S {
}

export class Read extends React.Component<P,S> {

  render(): React.ReactElement<any> {
    return (
      <div>
        <Header />
        <ReadMenu />
        <OnAirImg />
      </div>
    );
  }
}
