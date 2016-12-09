import * as React from "react";
import {Header} from "../../objects/Header";
import {Footer} from "../../objects/Footer";
import {HowToUse} from "./HowToUse";
import {MainMenu} from "./MainMenu";
// import {Search} from "../Search/Search";
import {browserHistory} from "react-router";
import {AllMessage} from "../RealTime/AllMessage";

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
          <AllMessage />
          <MainMenu changePage={this.changePage}/>
          <HowToUse />
        </div>
        <Footer />
      </div>
    );
  }
}
