import * as React from "react";
import {Button} from "react-bootstrap";
import {browserHistory} from "react-router";
import {CommentObject} from "../../objects/CommentObject";

interface P {
  changePage:Function;
  newComment:CommentObject;
}
interface S {
}

export class OnAirImg extends React.Component<P,S> {

  goBack(): void {
    browserHistory.push("post");
  }

  render(): React.ReactElement<any> {
    return (
      <div>
        <div className="read">
          <div className="read-select-btn">
            <Button bsStyle="success" onClick={this.goBack.bind(this)}>修正する</Button>
            <Button bsStyle="info">Tweetする</Button>
            <Button bsStyle="warning" onClick={this.props.changePage}>ホームへ</Button>
          </div>
          <h2>きゅんonRadio</h2>
          <p>／Now on Air＼</p>
          <div className="on-air-message">
            <p>PNxxさんからの投稿内容がここに入る{this.props.newComment}</p>
            <img src="../images/on-air.gif" alt="on-air"/>
          </div>
        </div>
      </div>
    );
  }
}
