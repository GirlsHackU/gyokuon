import * as React from "react";
import {CommentList} from "./CommentList";
import {CommentForm} from "./CommentForm";
import {CommentObject} from '../../objects/CommentObject'
import {Button} from "react-bootstrap";

interface P {
  goRead: Function;
  readMore: Function;
  goHome: Function;
  handleCommentSubmit: Function;
}
interface S {
  newComment?: CommentObject; //これから使うstate
  comments?: CommentObject[];
}

export class CommentBox extends React.Component<P,S> {
  constructor(props: P) {
    super(props);
    this.state = {
      comments: [
        new CommentObject(1, "Suneo", "最近Aくんとよく目があってドキドキしてしまいます…"),
      ],
      newComment: new CommentObject(Date.now(), "", "")
    }
  }

    handleCommentSubmit(comment) {
      console.log(comment);
      // const comments = this.state.data;
      // comment.id = Date.now()
      // const newComments = comments.concat([comment]);
      // this.setState({data: newComments});
      // // TODO: submit to the server and refresh the list
      // $.ajax({
      //   url: this.props.url,
      //   dataType: 'json',
      //   type: 'POST',
      //   data: comment,
      //   success: function(data) {
      //     this.setState({data: data});
      //   }.bind(this),
      //   error: function(xhr, status, err) {
      //     this.setState({data: comments});
      //     console.error(this.props.url, status, err.toString());
      //   }.bind(this)
      // });
    }
  changeAuthor(e): void {
    this.setState({newComment: new CommentObject(this.state.newComment.id, e.target.value, this.state.newComment.text)});
  }

  changeText(e): void {
    this.setState({newComment: new CommentObject(this.state.newComment.id, this.state.newComment.author, e.target.value)});
  }

  addComment(): void {
    this.state.comments.push(this.state.newComment);
    const nextId = this.state.comments.filter(d => d.hasOwnProperty('id')).map(d => d.id).reduce((p: number, c: number) => p > c ? p : c) + 1;
    const nextComment = new CommentObject(nextId, "", "");
    this.setState({comments: this.state.comments, newComment: nextComment});
  }

  render(): React.ReactElement<any> {
    return (
      <div className="post">
        <h1>きゅんonRadio</h1>
        <p>／あなたの"きゅん"エピソードを教えてください＼</p>
        <CommentForm handleCommentSubmit={this.handleCommentSubmit.bind(this)}
                     changeAuthor={this.changeAuthor.bind(this)}
                     changeText={this.changeText.bind(this)}
                     goRead={this.props.goRead}
                     goHome={this.props.goHome}/>
        <div className="real-time-post">
          <CommentList commentObjects={this.state.comments}/>
          <Button onClick={this.props.readMore}>more...</Button>
        </div>
      </div>
    );
  }
}
