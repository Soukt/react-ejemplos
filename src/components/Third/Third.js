import React, { Component } from "react";

export class Third extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.funcioncita("gato")}>
          Cambiar a gato
        </button>
      </div>
    );
  }
}

export default Third;
