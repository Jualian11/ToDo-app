import React from "react";
import { ToDoInput } from "../ToDoInput/ToDoInput";
import { ToDoLista } from "../ToDoLista/ToDoLista";
import { crearLocalstorage } from "../../hooks/useLocalStorage";
import { todo } from "../../estados";


const PageGlobal = () => {
    
    const [taskId, setTaskId] = React.useState(0);

    const [infoTodos, setInfoTodos] = React.useState([]);
    const [stateTemp, setStateTemp] = React.useState(todo);

    // React.useEffect(() => {

    //     const storedTodos = localStorage.getItem('infoTodos');
    //     if (storedTodos) {
    //         setInfoTodos(JSON.parse(storedTodos));
    //     }


    // }, [])

    const onChangeInput = (e) => {
        setStateTemp({
            ...stateTemp,
            id:taskId,
            titulo: e.target.value
        })
        
    };  

    const onClickActualizar = () => {

    }

    const submit = () => {
        if (stateTemp.titulo !== '') {
            crearLocalstorage(stateTemp, infoTodos, setInfoTodos)
            setTaskId(taskId+1)
            setStateTemp({
                ...stateTemp,
                id:'',
                titulo: ''
            })
        } else {

            console.log(" esta vació, no hay mounstros aqui");

        }

        const ultimoId = infoTodos.length > 0 ? infoTodos[infoTodos.length - 1].id : 1;
    };
    console.log("stateTemp", stateTemp);

    // data tempo`ral listar
    


    const [filtroActivo, setFiltroActivo] = React.useState("todos");
    const [toDosFiltrados, setToDosFiltrados] = React.useState(infoTodos);



    
    

    // const manejoSetCompletado = (id) => {
    //     const listaActualizada = toDos.map((toDo) => {
    //         if (toDo.id === id) {
    //             return { ...toDo, completado: !toDo.completado };
    //         }
    //         return toDo;
    //     });

    //     setToDos(listaActualizada);
    // };

    const manejoSetCompletado2 = (id) => {
        console.log("si toma el click");
        const listaActualizada = infoTodos.map((toDo) => {
            if (toDo.id === id) {
                return { ...toDo, completado: !toDo.completado };
            }
            return toDo;
        });

        // setToDos(listaActualizada);
    };

    const manejoBorrado = (id) => {
        const listaActualizada = infoTodos.filter((toDo) => toDo.id !== id);
        setInfoTodos(listaActualizada);
    };

    const manejoBorradoCompletos = () => {
        const listaActualizada = infoTodos.filter((toDo) => !toDo.completado);
        setInfoTodos(listaActualizada);
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
            const toDosActivos = infoTodos.filter((toDo) => toDo.completado === false);
            setToDosFiltrados(toDosActivos);
        } else if (filtroActivo === "completos") {
            const toDosCompletos = infoTodos.filter((toDo) => toDo.completado === true);
            setToDosFiltrados(toDosCompletos);
        }
    }, [filtroActivo, infoTodos]);
    // findata tempo`ral listar
    return (
        <>
            <ToDoInput onChangeInput={onChangeInput} submit={submit} stateTemp={stateTemp} />
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
