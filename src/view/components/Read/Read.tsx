import * as React from "react";
import {Header} from "../../objects/Header";
import {OnAirImg} from "./OnAirImg";
import {browserHistory} from "react-router";
import {CommentObject} from "../../objects/CommentObject";

interface P {
  params;
  newComment:CommentObject;
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
        <div>your address:{this.props.params.mail}</div>
        <OnAirImg
          changePage={this.changePage.bind(this)}
          author={this.props.params.author}
          text={this.props.params.text}
          mail={this.props.params.mail}
        />
      </div>
    );
  }
}
