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
                    author
                    <input type="text" onChange={this.props.changeAuthor}/>
                </div>
                <div>
                    comment
                    <input type="text" onChange={this.props.changeText}/>
                </div>
                <Button onClick={this.props.onSubmit}>Submit</Button>
            </div>
        );
    }
}