import React from "react";
import {
  FiltroBoton,
  FiltroContainer,
  FiltroContainerBotones,
  ItemsRestantes,
} from "./ToDoFiltro.components";

export const ToDoFiltro = ({
  total,
  filtroActivo,
  mostrarTodo,
  mostrarActivos,
  mostrarCompletados,
  manejoBorradoCompletos}
) => {
  return (
    <>
      <FiltroContainer>
        <ItemsRestantes total={total} />
        <FiltroContainerBotones>
          <FiltroBoton action={() => mostrarTodo()} active={filtroActivo} filter='Todos' />
          <FiltroBoton action={() => mostrarActivos()} active={filtroActivo} filter='Activos' />
          <FiltroBoton action={() => mostrarCompletados()} active={filtroActivo} filter='Completos' />
        </FiltroContainerBotones>

        <button onClick={() => manejoBorradoCompletos()} className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
          Borrar Completados
        </button>
      </FiltroContainer>
    </>
  );
};
