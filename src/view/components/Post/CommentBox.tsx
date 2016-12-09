import * as React from "react";
import {CommentList} from "./CommentList";
import {CommentForm} from "./CommentForm";
import {CommentObject} from '../../objects/CommentObject'
import {Button} from "react-bootstrap";

interface P {
  post: Function;
  readMore: Function;
  goHome: Function;
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
        new CommentObject(1, "Suneo", "最近Aくんとよく目があってドキドキしてしまいます…"),
      ],
      newComment: new CommentObject(2, "", "")
    }
  }

  changeAuthor(e): void {
    this.setState({newComment: new CommentObject(this.state.newComment.id, e.target.value, this.state.newComment.text)});
  }

  changeText(e): void {
    this.setState({newComment: new CommentObject(this.state.newComment.id, this.state.newComment.author, e.target.value)});
  }

  addComment(): void {
    this.state.comments.push(this.state.newComment);
    var nextId = this.state.comments.filter(d => d.hasOwnProperty('id')).map(d => d.id).reduce((p: number, c: number) => p > c ? p : c) + 1;
    var nextComment = new CommentObject(nextId, "", "");
    this.setState({comments: this.state.comments, newComment: nextComment});
  }

  render(): React.ReactElement<any> {
    return (
      <div className="post">
        <h1>きゅんonRadio</h1>
        <p>／あなたの"きゅん"エピソードを教えてください＼</p>
        <CommentForm onSubmit={this.props.post}
                     changeAuthor={this.changeAuthor.bind(this)}
                     changeText={this.changeText.bind(this)}
                     goHome={this.props.goHome}/>
        <div className="real-time-post">
          <CommentList commentObjects={this.state.comments}/>
          <Button onClick={this.props.readMore}>more...</Button>
        </div>
      </div>
    );
  }
}
