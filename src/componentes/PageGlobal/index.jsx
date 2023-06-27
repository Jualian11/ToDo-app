import React from "react";
import { ToDoInput } from "../ToDoInput/ToDoInput";
import { ToDoLista } from "../ToDoLista/ToDoLista";
import {
  actualizarLocalStorage,
  changeStadoLocalStorage,
  crearLocalstorage,
  eliminarCompletadosLocalStorage,
  eliminarLocalStorage,
} from "../../hooks/useLocalStorage";
import { todo } from "../../estados";

const PageGlobal = () => {
  const [taskId, setTaskId] = React.useState(0);

  const [infoTodos, setInfoTodos] = React.useState([]);
  const [stateTemp, setStateTemp] = React.useState(todo);
  // se crea titulo de boton para realizar el cambio en actualizar
  const [titleBu, setTitleBu] = React.useState("Crear");

  const onChangeInput = (e) => {
    if (titleBu === "Crear") {
      setStateTemp({
        ...stateTemp,
        id: taskId,
        titulo: e.target.value,
      });
    } else {
      setStateTemp({
        ...stateTemp,
        titulo: e.target.value,
      });
    }
  };

  const onClickActualizar = (toDo) => {
    setTitleBu("Actualizar");
    setStateTemp({
      ...stateTemp,
      id: toDo.id,
      titulo: toDo.titulo,
    });
  };

  const onClickCancelar = () => {
    setTitleBu("Crear");
    setStateTemp(todo);
  };

  const submit = () => {
    if (titleBu === "Crear") {
      if (stateTemp.titulo !== "") {
        crearLocalstorage(stateTemp, infoTodos, setInfoTodos);
        setTaskId(taskId + 1);
        setStateTemp({
          ...stateTemp,
          id: "",
          titulo: "",
        });
      } else {
        console.log(" esta vació, no hay mounstros aqui");
      }
      const ultimoId =
        infoTodos.length > 0 ? infoTodos[infoTodos.length - 1].id : 1;
    } else {
      console.log("entro en actualizar ", stateTemp);
      actualizarLocalStorage(stateTemp, infoTodos, setInfoTodos);
      setTitleBu("Crear");
    }
  };

  const [filtroActivo, setFiltroActivo] = React.useState("todos");
  const [toDosFiltrados, setToDosFiltrados] = React.useState(infoTodos);

  const manejoSetCompletado2 = (id) => {
    changeStadoLocalStorage(id, infoTodos, setInfoTodos);
  };

  const manejoBorrado = (id) => {
    eliminarLocalStorage(id, infoTodos, setInfoTodos);
  };

  const manejoBorradoCompletos = () => {
    eliminarCompletadosLocalStorage(infoTodos, setInfoTodos);
  };

  const mostrarTodo = () => {
    setFiltroActivo("todos");
  };

  const mostrarActivos = () => {
    setFiltroActivo("activos");
  };

  const mostrarCompletados = () => {
    setFiltroActivo("completos");
  };

  React.useEffect(() => {
    if (filtroActivo === "todos") {
      setToDosFiltrados(infoTodos);
    } else if (filtroActivo === "activos") {
      const toDosActivos = infoTodos.filter(
        (toDo) => toDo.completado === false
      );
      setToDosFiltrados(toDosActivos);
    } else if (filtroActivo === "completos") {
      const toDosCompletos = infoTodos.filter(
        (toDo) => toDo.completado === true
      );
      setToDosFiltrados(toDosCompletos);
    }
  }, [filtroActivo, infoTodos]);

  return (
    <>
      <ToDoInput
        onChangeInput={onChangeInput}
        submit={submit}
        stateTemp={stateTemp}
        titleBu={titleBu}
        onClickCancelar={onClickCancelar}
      />
      <ToDoLista
        onClickActualizar={onClickActualizar}
        toDos={toDosFiltrados}
        filtroActivo={filtroActivo}
        manejoSetCompletado={manejoSetCompletado2}
        manejoBorrado={manejoBorrado}
        mostrarTodo={mostrarTodo}
        mostrarActivos={mostrarActivos}
        mostrarCompletados={mostrarCompletados}
        manejoBorradoCompletos={manejoBorradoCompletos}
      />
    </>
  );
};

export default PageGlobal;
