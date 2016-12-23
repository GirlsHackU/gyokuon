import * as React from "react";

interface P {
}
interface S {
}

export class Header extends React.Component<P,S> {
  render(): React.ReactElement<any> {
    return (
      <header>
        <h1><img src="../images/heart.png" alt="heart"/></h1>
        <p>あなたの"きゅん" お待ちしています！</p>
      </header>
    );
  }
}

