import * as React from "react";
import {CommentList} from "./CommentList";
import {CommentForm} from "./CommentForm";
import {CommentObject} from '../../objects/CommentObject'

interface P {
}
interface S {
  newComment?: CommentObject;
  comments?: CommentObject[];
}

export class CommentBox extends React.Component<P,S> {
  constructor(props: P) {
    super(props);
    this.state = {
      comments: [
        new CommentObject(1, "Suneo", "好きな子と目があった！！"),
        new CommentObject(2, "Aizawa", "ひざまくらをしてもらった///"),
        new CommentObject(3, "Minori", "心がぴょんぴょんするんじゃああああ")
      ],
      newComment: new CommentObject(4, "", "")
    }
  }

  changeAuthor(e):void {
    this.setState({newComment: new CommentObject(this.state.newComment.id, e.target.value, this.state.newComment.text)});
  }

  changeText(e):void {
    this.setState({newComment: new CommentObject(this.state.newComment.id, this.state.newComment.author, e.target.value)});
  }

  addComment():void {
    this.state.comments.push(this.state.newComment);
    var nextId = this.state.comments.filter(d => d.hasOwnProperty('id')).map(d => d.id).reduce((p: number, c: number) => p > c ? p : c) + 1;
    var nextComment = new CommentObject(nextId, "", "");
    this.setState({comments: this.state.comments, newComment: nextComment});
  }

  render(): React.ReactElement<any> {
    return (
      <div className="commentBox">
        <h1>みんなの"きゅん"</h1>
        <CommentList commentObjects={this.state.comments}/>
        <CommentForm onSubmit={this.addComment.bind(this)}
                     changeAuthor={this.changeAuthor.bind(this)}
                     changeText={this.changeText.bind(this)}/>
      </div>
    );
  }
}
