import React, { Component } from "react";
import "./Second.css";
import { ContextConsumer } from "../../ContextClass";
import Third from "../Third/Third";
//////////////////////////////////
class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: "perro",
    };
  }
  setAnimal(newAnimal) {
    this.setState({ animal: newAnimal });
  }
  render() {
    return (
      <ContextConsumer>
        {(dato) => (
          <div>
            <h2>{this.state.animal}</h2>
            <p> {dato.nombre}</p>
            <button onClick={() => dato.metodo("estas logeado")}>
              Loggeate
            </button>
            <Third funcioncita={this.setAnimal.bind(this)} />
          </div>
        )}
      </ContextConsumer>
    );
  }
}

export default Second;
