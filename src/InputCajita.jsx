import React, { useState, useEffect } from "react";
import "./styles/InputCajita.css";

export const InputCajita = () => {
  const [input, setInput] = useState("");
  const [mensaje, setMensaje] = useState([]);

  const obtenerMensaje = (event) => {
    event.persist();
    const inputActual = event.target.value;
    setInput(inputActual);
  };

  const mantenerMensajeAnterior = () => {
    setMensaje([...mensaje, input]);
  };

  useEffect(() => {
    let letras = input.length;
    if (letras <= 240) {
      document.title = `Te quedan ${240 - letras} letras.`;
    }
    if (letras >= 240) {
      alert("No tienes mas letras disponibles!");
    }
  }, [input]);

  return (
    <div>
      <h1>¿Qué estás pensando?</h1>
      <textarea onChange={obtenerMensaje} placeholder="Ingresa tu mensaje" />
      <br />
      <button
        className="botonEnviar"
        disabled={input.length === 0 || input.length > 240}
        onClick={mantenerMensajeAnterior}
      >
        Enviar mensaje
      </button>
      {mensaje == "" ? (
        <h2>No tiene mensajes 🙁</h2>
      ) : (
        <div className="mensajesEnviados">
          {mensaje.map((mensaje, index) => (
            <div className="mensajeRecibido" key={index}>
              {mensaje}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
