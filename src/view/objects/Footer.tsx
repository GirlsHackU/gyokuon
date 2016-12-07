/**
 * Created by gs16051 on 2016/12/06.
 */

import * as React from "react";

interface P {
}
interface S {
}

export class Footer extends React.Component<P,S> {
  render(): React.ReactElement<any> {
    return (
      <footer>
        <img src="../images/girl.png" alt="girl"/>
      </footer>
    );
  }
}