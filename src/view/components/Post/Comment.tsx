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
        <h2 className="commentAuthor">
          {this.props.commentObject.author}
        </h2>
        <p>{this.props.commentObject.text}</p>
        <Button>Select</Button>
      </div>
    );
  }
}
