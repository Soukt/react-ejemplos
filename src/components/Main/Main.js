import React, { useState } from "react";
import { useFirebaseApp, useFirestoreCollection } from "reactfire";
import "firebase/firestore";
import "firebase/auth";

export default () => {
  const [prueba, setPrueba] = useState("Escribe algo");
  const email = "ryan@hotmail.com";
  const password = "123456";
  const firebase = useFirebaseApp();
  const pruebaFirestore = firebase.firestore().collection("classreactfirebase");
  const pruebaFire = useFirestoreCollection(pruebaFirestore).docs.map(
    (user) => ({
      id: user.id,
      ...user.data(),
    })
  );

  function register(e) {
    alert("¡Enhorabuena!");
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }
  function updateInput(e) {
    if (e.target.value.length != 0)
      setPrueba("Has escrito=>  " + e.target.value);
    else {
      setPrueba("Escribe algo");
    }
  }

  return (
    <div>
      <h1>{prueba}</h1>
      <button onClick={register}>🌮 🌮 </button>
      <input type="text" onChange={updateInput} />
      <h2>El usuario que viene de la base de datos es {pruebaFire[1].user}</h2>
    </div>
  );
};
