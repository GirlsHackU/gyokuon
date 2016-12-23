import * as React from "react";
import {CommentList} from "./CommentList";
import {CommentForm} from "./CommentForm";
import {CommentObject} from '../../objects/CommentObject'
import {Button} from "react-bootstrap";
import request = require('superagent')
import {LatestPost} from "../RealTime/LatestPost";

interface P {
  goRead: Function;
  readMore: Function;
  goHome: Function;
  handleCommentSubmit: Function;
}
interface S {
  comments?: CommentObject[];
}

export class CommentBox extends React.Component<P,S> {
  constructor(props: P) {
    super(props);
    this.state = {
      comments: [
        new CommentObject(1, "Suneo", "最近Aくんとよく目があってドキドキしてしまいます…","suneo3476@gmail.com", "", "", 0),
      ]
    }
  }

    handleCommentSubmit(inputComment) {
      const newComment = new CommentObject(
          Date.now(),
          inputComment.author,
          inputComment.text,
          inputComment.mail,
          '', '', 0
      );
      request
          .post('http://localhost:3000/api/newComment')
          .send(newComment)
          .end(function (err, res) {
            if(err){
              console.error('/api/newComment', status, err.toString());
            }
            const val = res.body;
            console.log(val);
          }.bind(this));
    }

  render(): React.ReactElement<any> {
    return (
      <div className="post">
        <h2>きゅんonRadio</h2>
        <p>あなたの"きゅん"エピソードを教えてください.</p>
        <CommentForm handleCommentSubmit={this.handleCommentSubmit.bind(this)}
                     goRead={this.props.goRead}
                     goHome={this.props.goHome}/>
        <div className="real-time-post">
          <LatestPost/>
          <Button onClick={this.props.readMore}>more...</Button>
        </div>
      </div>
    );
  }
}
