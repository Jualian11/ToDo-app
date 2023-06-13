import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../useLocalStorage/useLocalStorage";
import { crearLocalstorage } from "../../hooks/useLocalStorage";
import { todo } from "../../estados";

const dataTemporal = { id: 1, titulo: 'tarea prueba', completado: false }

export const ToDoInput = ({ anadirToDo, onChangeInput, submit, stateTemp }) => {
  // const [titulo, setTitulo] = useState("");
  // console.log(titulo)
  // const [titulo, setTitulo] = useLocalStorage("titulo", "");

  

  // const manejarToDo = (e) => {
  //   if (e.key.toLowerCase() === "enter") {
  //     anadirToDo(titulo);
  //     setTitulo("");
  //   }
  // };

  return (
    <>
      <div className="mt-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="border border-gray-400 border-solid p-4 rounded-full"></span>
        </div>
        <input
          type="text"
          className="focus:shadow-lg focus:shadow-blue-800 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
          placeholder="  Que haras esta vez ..."
          value={stateTemp?.titulo}
          onChange={onChangeInput}
        // onKeyDown={(e) => manejarToDo(e)}
        />
        <button onClick={submit} >Crear</button>
      </div>
    </>
  );
};
