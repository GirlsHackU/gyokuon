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
                    PN<input type="text" onChange={this.props.changeAuthor}/>
                </div>
                <div>
                  投稿<input type="text" onChange={this.props.changeText}/>
                </div>
                <Button bsStyle="danger" onClick={this.props.onSubmit}>投稿</Button>
            </div>
        );
    }
}