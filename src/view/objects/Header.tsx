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
            <h1><img src="../images/heart.png" alt="heart"/></h1>
            <p>あなたの"きゅん" お待ちしています！</p>
          </Navbar.Header>
        </Navbar>
      </header>
    );
  }
}

