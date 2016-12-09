/**
 * Created by gs16051 on 2016/12/09.
 */
import * as React from "react";
import request = require("superagent");

interface P {
}
interface S {
  latestPost: string;
  timerId: number;
}

export class LatestPost extends React.Component<P,S> {
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
    var timerId = setInterval(this.loadLatestPostFromServer.bind(this), 2000);
    this.setState({
      latestPost: this.state.latestPost,
      timerId: timerId
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render(): React.ReactElement <any> {
    return (
      <div>
        <div className="all-message">
          <img src="../images/radio.png" alt="radio"/>
          <p>{this.state.latestPost}</p>
        </div>
      </div>
    );
  }
}
