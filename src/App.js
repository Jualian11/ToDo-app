import { useEffect, useState } from "react";
import "./App.css";
import { Titulo } from "./componentes/Titulo";
import { ToDoInput } from "./componentes/ToDoInput/ToDoInput";
import { ToDoLista } from "./componentes/ToDoLista/ToDoLista";
import toDoArray from "./componentes/ToDoInput/toDoArray";
import PageGlobal from "./componentes/PageGlobal";

function App() {
  return (
    <>
      <div className="bg-cyan-200 min-h-screen w-full h-full text-gray-700 flex flex-col items-center justify-center py-2 px-10">
        <div className="flex flex-col items-center justify-center ">
          <Titulo />
        </div>
        <div className="container flex flex-col max-w-xl max-h-full">
          <PageGlobal />
        </div>
      </div>
    </>
  );
}

export default App;

{
  /* <h1 className='text-6xl text-center'> To-Do App</h1>
<h2>Componentes en los que dividi la app</h2>
<ul>El titulo</ul>
<ul>El input de entrada</ul>
<ul>La lista</ul>
<ul>Cada To Do</ul>
<ul>Los filtros</ul> */
}
