import React from "react";

export const ToDo = ({ toDo, manejoSetCompletado, manejoBorrado, onClickActualizar }) => {
  const { id, titulo, completado } = toDo;

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600 ">
        <div className="flex items-center">
          {completado ? (
            <div
              onClick={() => manejoSetCompletado(id)}
              className=" bg-green-700 p-1 rounded-full cursor-pointer"
            >
              <img className="h-4 w-4" src="/check-icon.svg" alt="Check icon" />
            </div>
          ) : (
            <span
              onClick={() => manejoSetCompletado(id)}
              className="border border-solid border-gray-400 rounded-full p-3 cursor-pointer"
            ></span>
          )}

          <p className={"pl-3 " + (completado && "line-through")}> {titulo} </p>
        </div>
        <button onClick={(e) => onClickActualizar(id)} >Actualizar</button>
        <button>Eliminar</button>
        <img
          onClick={() => manejoBorrado(id)}
          src="/close-icon.svg"
          alt="Close icon"
          className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in "
        />
      </div>
    </>
  );
};
