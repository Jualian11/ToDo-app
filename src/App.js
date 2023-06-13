import { useEffect, useState } from "react";
import "./App.css";
import { Titulo } from "./componentes/Titulo";
import { ToDoInput } from "./componentes/ToDoInput/ToDoInput";
import { ToDoLista } from "./componentes/ToDoLista/ToDoLista";
import toDoArray from "./componentes/ToDoInput/toDoArray";
import PageGlobal from "./componentes/PageGlobal";


function App() {
  

  return (
    <div className="bg-gray-800 min-h-screen h-full text-gray-200 flex items-center justify-center py-20 px-10">
      <div className="container flex flex-col max-w-xl">
        <Titulo />
        <PageGlobal/>
      </div>
    </div>
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
