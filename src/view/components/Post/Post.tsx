/**
 * Created by gs16051 on 2016/12/07.
 */

import * as React from "react";
import {CommentBox} from "./CommentBox";
import {Header} from "../../objects/Header";

interface P {
}
interface S {
}

export class Post extends React.Component<P,S> {

  render() {
    return (
      <div>
        <Header />
        <CommentBox />
      </div>
    )
  }
}

