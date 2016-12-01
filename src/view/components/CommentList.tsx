import * as React from "react";
import {Comment} from "./Comment"
import {CommentObject} from "../objects/CommentObject";

interface P {
  commentObjects: CommentObject[];
}
interface S {}

export class CommentList extends React.Component<P,S> {
  render(): React.ReactElement<any> {
    const comments: React.ReactFragment = this.props.commentObjects.map((commentObject: CommentObject, i: number) =>
      <Comment key={i} commentObject={commentObject}/>
    );

    return (
      <div className="commentList">
        {comments}
      </div>
    );
  }
}