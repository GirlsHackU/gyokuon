import * as React from "react";
import {Header} from "../../objects/Header";
import {Footer} from "../../objects/Footer";
import {HowToUse} from "./HowToUse";
import {MainMenu} from "./MainMenu";
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
  readMore(): void {
    browserHistory.push('real-time');
  }

  render(): React.ReactElement<any> {
    return (
      <div>
        <Header />
        <div className="main">
          <LatestPost readMore={this.readMore.bind(this)}/>          <MainMenu changePage={this.changePage.bind(this)}/>
          <HowToUse />
        </div>
        <Footer />
      </div>
    );
  }
}
