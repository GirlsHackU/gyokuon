import * as React from "react";
import {CommentObject} from "../../objects/CommentObject";
import {Button} from "react-bootstrap";

export interface P {
  commentObject: CommentObject
}

interface S {
}

export class Comment extends React.Component<P, S> { //commentListの子要素。propsを使う。

  render(): React.ReactElement<any> {
    return (
      <div className="comment">
        <p className="commentAuthor">
          {this.props.commentObject.author}:
          {this.props.commentObject.text}</p>
        <Button>more...</Button>
      </div>
    );
  }
}
