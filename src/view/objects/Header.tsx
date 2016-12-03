import * as React from "react";

interface P {
}
interface S {
}

export class Header extends React.Component<P,S> {
  render():React.ReactElement<any> {
    return (
      <div>
        <p>menu</p>
      </div>
    );
  }
};

