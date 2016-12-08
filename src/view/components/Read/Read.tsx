import * as React from "react";
import {Header} from "../../objects/Header";
import {OnAirImg} from "./OnAirImg";
import {browserHistory} from "react-router";

interface P {
}
interface S {
}

export class Read extends React.Component<P,S> {

  changePage(): void {
    browserHistory.push("/");
  }
  render(): React.ReactElement<any> {
    return (
      <div>
        <Header />
        <OnAirImg changePage={this.changePage.bind(this)}/>
      </div>
    );
  }
}
