import * as React from "react";
import {Header} from "../../objects/Header";
import {Footer} from "../../objects/Footer";
// import {Search} from "../Search/Search";
import {browserHistory} from "react-router";
import {LatestPost} from "../RealTime/LatestPost";

interface P {
  selectedProgram: Number;
}
interface S {
}

export class Home extends React.Component<P,S> {

  changePage(): void {
    browserHistory.push('post');
  }

  render(): React.ReactElement<any> {
    return (
      <div>
        <Header />
        <div className="main">
        </div>
        <Footer />
      </div>
    );
  }
}
