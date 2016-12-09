import * as React from "react";
import {Header} from "../../objects/Header";
import {OnAirImg} from "./OnAirImg";
import {browserHistory} from "react-router";
import {Button} from "react-bootstrap";
import {Glyphicon} from "react-bootstrap";

interface P {
    id: String;
}
interface S {
    kyunCount: Number;
}

// その投稿の「きゅん」数を表示して、押すたびに
// 数が増える「きゅんボタン」のコンポーネント
export class KyunButton extends React.Component<P,S> {

    constructor(props: P){
        super(props);
        this.setState({kyunCount: this.loadKyunCountByCommentId(this.props.id)});
    }
    loadKyunCountByCommentId (id): Number{
        return 0;
    }
    onClickKyunButton (): void{

    }
  render(): React.ReactElement<any> {
    return (
      <div className="kyunButton">
        <Button bsStyle="danger" onClick={this.onClickKyunButton}>
            <Glyphicon glyph="heart"></Glyphicon>きゅん
        </Button>
      </div>
    );
  }
}
