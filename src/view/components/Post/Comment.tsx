import * as React from "react";
import {CommentObject} from "../../objects/CommentObject";
import {Button} from "react-bootstrap";

export interface P {
  commentObject: CommentObject;
}

interface S {
}

export class Comment extends React.Component<P, S> {

  render(): React.ReactElement<any> {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          P.N. {this.props.commentObject.author+' さんからのお便り '}
        </h2>
        <p className="commentText">{this.props.commentObject.text}</p>
      </div>
    );
  }
}
