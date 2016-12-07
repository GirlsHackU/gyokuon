import * as React from "react";
import {Header} from "../../objects/Header";
import {Footer} from "../../objects/Footer";
import {HowToUse} from "./HowToUse";
import {MainMenu} from "./MainMenu";
import {Search} from "../Search/Search";

interface P {
}
interface S {
}

export class Home extends React.Component<P,S> {

  changePage(): void {
    history.pushState(null, 'post');
  }

  render(): React.ReactElement<any> {
    return (
      <div>
        <Header />
        <MainMenu changePage={this.changePage.bind(this)}/>
        <HowToUse />
        <Footer />
      </div>
    );
  }
}
