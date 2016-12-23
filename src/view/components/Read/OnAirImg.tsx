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
          <h2>【番組】きゅんonRadio</h2>
          <p>　　　／Now on Air＼</p>
          <div className="on-air-message">
            <div>
              <p className="message-author">続いては、P.N. {this.props.newComment.author} さんからの投稿。</p>
              <p className="message-text">「{this.props.newComment.text}」ですって！</p>
              <p>リスナーのみんな、「きゅん」としたかな？</p>
              <KyunButton mail={this.props.newComment.mail}/>
            </div>
            <img src="/images/on-air.gif" alt="on-air"/>
          </div>
        </div>
      </div>
    );
  }
}
