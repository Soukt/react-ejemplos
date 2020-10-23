import React, { useState } from "react";
import preguntas from "../../preguntas.js";
function ParaBea() {
  const [numPregunta, setNumPregunta] = useState(0);

  return (
    <div>
      {preguntas[numPregunta].pregunta}
      <h1>vamos por la pregunta {numPregunta}</h1>
      <button onClick={() => setNumPregunta(numPregunta + 1)}>zapato</button>

      {/* <Question
        pregunta={pregunta[numPregunta]}
        metodoCambioPregunta={setNumPregunta}
      /> */}
    </div>
  );
}

export default ParaBea;
