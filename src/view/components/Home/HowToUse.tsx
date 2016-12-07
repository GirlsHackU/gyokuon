/**
 * Created by gs16051 on 2016/12/06.
 */

import * as React from "react";
import {Button} from "react-bootstrap";

interface P {
}
interface S {
}

export class HowToUse extends React.Component<P,S> {
  render(): React.ReactElement<any> {
    return (
      <div className="how-to-use">
        <Button bsStyle="danger"><img src="../images/howtouse.png" alt="howtouse"/></Button>
      </div>
    );
  }
}