import * as React from "react";
import {Navbar} from "react-bootstrap";

interface P {
}
interface S {
}

export class Header extends React.Component<P,S> {
  render(): React.ReactElement<any> {
    return (
      <header>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <p><img src="../images/heart.png" alt="heart"/>Kyun-FM</p>
          </Navbar.Header>
        </Navbar>
      </header>
    );
  }
}
;

