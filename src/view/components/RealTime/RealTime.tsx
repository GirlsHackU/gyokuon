import * as React from "react";
import {CommentObject} from "../../objects/CommentObject";
import request = require("superagent");

interface P {
}
interface S {
  latestPost: string;
  timerId: number;
}

export class RealTime extends React.Component<P,S> {
  constructor(props: P) {
    super(props);
    this.state = {latestPost: 'init', timerId: 0};
  }

  loadLatestPostFromServer() {
    request
      .get('http://localhost:3000/api/latestPost')
      .end(function (err, res) {
        if (err) {
          console.error('/api/latestPost', status, err.toString());
        }
        const val = res.body;
        const text = 'P.N. ' + val.author + " さん < " + val.text;
        this.setState({latestPost: text});
      }.bind(this));
  }

  componentDidMount() {
    this.loadLatestPostFromServer();
    this.setState({
      latestPost: this.state.latestPost,
      timerId: setInterval(this.loadLatestPostFromServer.bind(this), 2000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render(): React.ReactElement <any> {
    return (
      <div>
        <div className="real-time">
          <h2>みんなの“きゅん”</h2>
          <p>{this.state.latestPost}</p>
        </div>
      </div>
    );
  }
}
