/**
 * Created by gs16051 on 2016/12/09.
 */
import * as React from "react";
import request = require("superagent");

interface P {
}
interface S {
  author: string;
  text: string;
  timerId: number;
}

export class Message extends React.Component<P,S> {
  constructor(props: P) {
    super(props);
    this.state = {author: '', text: '', timerId: 0};
  }

  loadLatestPostFromServer() {
    request
      .get('http://localhost:3000/api/latestPost')
      .end(function (err, res) {
        if (err) {
          console.error('/api/latestPost', status, err.toString());
        }
        const val = res.body;
        this.setState({
          author: val.author,
          text: val.text,
          timerId: this.state.timerId});
      }.bind(this));
  }

  componentDidMount() {
    this.loadLatestPostFromServer();
    var timerId = setInterval(this.loadLatestPostFromServer.bind(this), 2000);
    this.setState({
      author: this.state.author,
      text: this.state.text,
      timerId: timerId
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render(): React.ReactElement <any> {
    return (
      <div>
        <p>P.N. {this.state.author}さんの投稿</p>
        <p>{this.state.text}</p>
      </div>
    );
  }
}
