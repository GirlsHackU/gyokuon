/**
 * Created by minori.watanabe on 2016/09/09.
 */
import * as React from "react";
import {Button} from "react-bootstrap";

interface P{
    changeAuthor: boolean;
    changeText: boolean;
    onSubmit: Function;
}
interface S{}

export class CommentForm extends React.Component<P, S>{
    render(): React.ReactElement<any> {
        return (
            <div className="commentForm">
                <div>
                    PN<input name="pn" type="text"  onChange={this.props.changeAuthor}/>
                </div>
              <div>
                メールアドレス<input name="address" type="text" />
              </div>
                <div>
                  投稿<textarea name="content" rows="4" cols="19" onChange={this.props.changeText}/>
                </div>
                <Button bsStyle="danger" onClick={this.props.onSubmit}>投稿</Button>
            </div>
        );
    }
}