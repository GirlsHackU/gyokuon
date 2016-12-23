import * as React from "react";
import {Button} from "react-bootstrap";
import {Glyphicon} from "react-bootstrap";
import request = require("superagent");

interface P {
  mail: string;
}
interface S {
  kyunCount: number;
}

export class KyunButton extends React.Component<P,S> {

  constructor(props: P){
    super(props);
    this.state = {kyunCount: 0};
  }

  componentDidMount(){
    request
      .post('http://localhost:3000/api/getLatestCommentByMail')
      .send({mail:this.props.mail})
      .end(function(err, res){
        if(err){
          console.error('/api/getLatestCommentByMail', status, err.toString());
        }
        this.setState({kyunCount: res.body.kyun});
      }.bind(this));
  }

  handleClick():void{
    request
      .post('http://localhost:3000/api/countUpKyun')
      .send({'mail':this.props.mail})
      .end(function (err, res) {
        if(err){
          console.error('/api/countUpKyun', status, err.toString());
        }
      }.bind(this));
    this.setState({kyunCount: this.state.kyunCount + 1});
  };

  render(): React.ReactElement<any> {
    return (
      <div>
        <p>きゅんときたら、きゅんボタンを押してみよう！
          <Button bsStyle="danger" onClick={this.handleClick.bind(this)}>
            <Glyphicon glyph="heart" />
            <span className="kyun-count">
                    {this.state.kyunCount!=0?this.state.kyunCount:''}
                </span>
            きゅん
          </Button>
        </p>
      </div>
    );
  }
}