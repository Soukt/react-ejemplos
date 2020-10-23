import React, { Suspense, useState } from "react";
import Main from "./components/Main/Main";
import "./App.css";
import firebaseConfig from "./firebaseConfig";
import { FirebaseAppProvider } from "reactfire";
import Second from "./components/Second/Second";
import ParaBea from "./components/ParaBea/ParaBea";
import { ContextProvider } from "./ContextClass";
function App() {
  const [contexto, setContexto] = useState("no estas loggeado");
  console.log(contexto);
  return (
    <div className="App">
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <h1>🌯</h1>
        <Suspense fallback={<h1>🌯Cargando...🌯</h1>}>
          <ContextProvider value={{ nombre: contexto, metodo: setContexto }}>
            <Main />
            <Second />
            <h1>------------------------------</h1>
            <ParaBea />
          </ContextProvider>
        </Suspense>
      </FirebaseAppProvider>
    </div>
  );
}

export default App;
