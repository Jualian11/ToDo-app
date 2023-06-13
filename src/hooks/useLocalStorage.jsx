import React from 'react'

export const crearLocalstorage = (nuevoTodo, infoTodos, setInfoTodos) => {
    const updatedTodos = [...infoTodos, nuevoTodo];
    setInfoTodos(updatedTodos);
    localStorage.setItem("infoTodos", JSON.stringify(updatedTodos));

}

export const actualizarLocalStorage = (actualizarTodo, infoTodos, setInfoTodos) => {
    const actualizarTodos = infoTodos.map((todo) =>
      todo.id === actualizarTodo.id ? actualizarTodo : todo
    );
    setInfoTodos(actualizarTodos);
    localStorage.setItem("infoTodos", JSON.stringify(actualizarTodos));

} 

export const eliminarLocalStorage = (todoId, infoTodos, setInfoTodos) => {
    const actualizarTodos = infoTodos.filter((todo) => todo.id !== todoId);
    setInfoTodos(actualizarTodos);
    localStorage.setItem("infoTodos", JSON.stringify(actualizarTodos));

}

