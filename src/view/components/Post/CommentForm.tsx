/**
 * Created by minori.watanabe on 2016/09/09.
 */
import * as React from "react";
import {Button} from "react-bootstrap";
import {browserHistory} from "react-router";
import {CommentObject} from "../../objects/CommentObject";

interface P {
  changeAuthor: boolean;
  changeText: boolean;
  changeMail: boolean;
  handleCommentSubmit: Function;
  goRead: Function;
  goHome: Function;
}
interface S {
    author: string;
    text: string;
    mail: string;
}

export class CommentForm extends React.Component<P, S> {
  constructor(props: P){
      super(props);
      this.state = {author: '', text: '', mail: ''};
  }
    handleAuthorChange(e): void{
        this.setState({'author': e.target.value, 'text': this.state.text, 'mail': this.state.mail});
    }
    handleTextChange(e): void{
        this.setState({'author': this.state.author, 'text': e.target.value, 'mail': this.state.mail});
    }
    handleMailChange(e): void{
        this.setState({'author': this.state.author, 'text': this.state.text, 'mail': e.target.value});
    }
    handleSubmit(e): void{
      e.preventDefault();
      const author = this.state.author.trim();
      const text = this.state.text.trim();
      const mail = this.state.text.trim();
      if(!author || !text || !mail){
          return;
      }
      this.props.handleCommentSubmit({author: author, text: text, mail: mail});
      this.setState({'author': '', 'text': '', 'mail': ''});
      this.props.goRead();
    }
  render(): React.ReactElement<any> {
    return (
      <form className="commentForm">
          <div className="form-group">
              <label htmlFor="pn">P.N.</label>
              <input
                  className="form-control"
                  name="author"
                  type="text"
                  placeholder="ぺんねーむ"
                  id="pn"
                  required
                  value={this.state.author}
                  onChange={this.handleAuthorChange.bind(this)}
              />
          </div>
          <div className="form-group">
              <label htmlFor="mail">メールアドレス</label>
              <input
                  className="form-control"
                  name="mail"
                  type="text"
                  placeholder="検索用メールアドレス"
                  id="mail"
                  required
                  value={this.state.mail}
                  onChange={this.handleMailChange.bind(this)}
              />
          </div>
          <div className="form-group">
              <label htmlFor="text">おたより本文</label>
              <textarea
                  className="form-control"
                  name="text"
                  rows="4" cols="19" maxlength="70"
                  id="text"
                  required
                  value={this.state.text}
                  onChange={this.handleTextChange.bind(this)}
              />
          </div>
        <Button bsStyle="warning" onClick={this.props.goHome}>ホームへ</Button>
        <Button bsStyle="danger" onClick={this.handleSubmit.bind(this)}>投稿</Button>
      </form>
    );
  }
}