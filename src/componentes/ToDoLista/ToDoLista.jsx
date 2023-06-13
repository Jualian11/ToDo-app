import React from "react";
import { ToDoFiltro } from "../ToDoFiltro/ToDoFiltro";
import { ToDo } from "../ToDo/ToDo";

export const ToDoLista = ({
  toDos,
  manejoSetCompletado,
  manejoBorrado,
  manejoBorradoCompletos,
  filtroActivo,
  mostrarTodo,
  mostrarActivos,
  mostrarCompletados,
  onClickActualizar,
}) => {
  return (
    <>
      <div className="flex flex-col my-7 rounded-lg overflow-hidden shadow-2xl ">
        {toDos.map((toDo) => {
          return (
            <ToDo
              onClickActualizar={onClickActualizar}
              key={toDo.id}
              toDo={toDo}
              manejoSetCompletado={manejoSetCompletado}
              manejoBorrado={manejoBorrado}
            />
          );
        })}
        <ToDoFiltro
          filtroActivo={filtroActivo}
          total={toDos.length}
          mostrarTodo={mostrarTodo}
          mostrarActivos={mostrarActivos}
          mostrarCompletados={mostrarCompletados}
          manejoBorradoCompletos={manejoBorradoCompletos}
        />
      </div>
    </>
  );
};
