/**
 * Created by gs16051 on 2016/12/06.
 */

import * as React from "react";

interface P {
}
interface S {
}

export class Page extends React.Component<P,S> {

  render(): React.ReactElement<any> {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
