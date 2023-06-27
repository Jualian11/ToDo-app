// lista modificaciones 
// se modifica la funcion ToDoInput.jsx se le agrega un boton cancelar que se agrega como extra para que practiques
// se modifica el archivo PageGlobal.jsx en este se modifican las funciones actualizar completado eliminiar y eliminar completados yse agrega como extra la funcionalidad de 
// actualizar debes mirar todo el codigo decirme que entiendes y lo que no entiendes hasta que te lo aprendas 
// y se modifica este archivo agregandole la funcionalidad de eliminar completados y cambiar el estado de la tarea 

// nota: importarte !
// hay un error en el codigo que al refrescar la pagina no carga la informacion que esta en el localStorage no significa que se este eliminando 
// solo que no la esta llamando hay que revisar el porque y hacer qu no genere error 
// elimina el codigo que no se necesita 
// si no tienes nada mas que hacer intenta poner una alerta o un mensaje cuando den click en el boton borrar completados y no hallan
// y en la parte visual cuando uno pone un nombre largo se corre la letra del boton actualizar y eliminar corrige eso con css

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

export const changeStadoLocalStorage = (id, infoTodos, setInfoTodos) => {
    //se modifica para modificar solo el estado de la tarea true a false o vis
    // console.log("entra en la funcion lleva el id", id);
    const actualizarTodos = infoTodos.map((todo) =>
      {
        if (todo.id === id) {
            return { ...todo, completado: !todo.completado };
        }
        return todo;
      }
    );
    //verifico en consola la informacion antes de guardar
    // console.log("antes de actualizar info ver ",actualizarTodos);
    setInfoTodos(actualizarTodos);
    localStorage.setItem("infoTodos", JSON.stringify(actualizarTodos));

} 

export const eliminarLocalStorage = (todoId, infoTodos, setInfoTodos) => {
    // se revisa que llame la funcion y que tenga el id
    // console.log("entra en la funcion lleva el id", todoId);
    const actualizarTodos = infoTodos.filter((todo) => todo.id !== todoId);
    //verifico en consola la informacion antes de guardar
    // console.log("antes de actualizar info ver ",actualizarTodos);
    setInfoTodos(actualizarTodos);
    localStorage.setItem("infoTodos", JSON.stringify(actualizarTodos));

}

export const eliminarCompletadosLocalStorage = (infoTodos, setInfoTodos) => {
    // se revisa que llame la funcion y que tenga el id
    // console.log("entra en la funcion eliminar completos");
    const actualizarTodos = infoTodos.filter((todo) => todo.completado !== true);
    //verifico en consola la informacion antes de guardar
    // console.log("antes de actualizar info ver ",actualizarTodos);
    setInfoTodos(actualizarTodos);
    localStorage.setItem("infoTodos", JSON.stringify(actualizarTodos));

}

