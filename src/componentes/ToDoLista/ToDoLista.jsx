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
      <div className="flex flex-col  mt-4 rounded-lg overflow-hidden shadow-2xl">
        <ToDoFiltro
          filtroActivo={filtroActivo}
          total={toDos.length}
          mostrarTodo={mostrarTodo}
          mostrarActivos={mostrarActivos}
          mostrarCompletados={mostrarCompletados}
          manejoBorradoCompletos={manejoBorradoCompletos}
        />
      </div>
      <div className="flex flex-col my-5  rounded-lg overflow-hidden shadow-2xl ">
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
      </div>
      <div className="mt-2 py-2 w-full flex flex-col items-center bg-cyan-400 rounded-lg overflow-hidden shadow-2xl ">
        <p> ¡ Aquí terminan tus tareas, agrega una mas arriba 😊 ! </p>
      </div>
    </>
  );
};
