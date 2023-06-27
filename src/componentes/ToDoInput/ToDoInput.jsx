// const dataTemporal = { id: 1, titulo: "tarea prueba", completado: false };

export const ToDoInput = ({
  onChangeInput,
  submit,
  stateTemp,
  titleBu,
  onClickCancelar,
}) => {
  return (
    <>
      <div className="mt-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className=""></span>
        </div>
        <input
          type="text"
          className="focus:shadow-lg focus:shadow-cyan-800 pl-5 shadow-lg shadow-cyan-500 w-full py-4 my-4 bg-cyan-300 placeholder-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
          placeholder="  Que haras esta vez ..."
          value={stateTemp?.titulo}
          onChange={onChangeInput}
          // onKeyDown={(e) => manejarToDo(e)}
        />
        <button
          onClick={submit}
          className=" w-full py-4 bg-cyan-400 rounded-xl outline-none shadow-lg shadow-cyan-500 hover:shadow-cyan-600"
        >
          {titleBu}
        </button>{" "}
        <br />
        {titleBu === "Actualizar" && (
          <button
            onClick={onClickCancelar}
            className=" w-full my-4 py-4 bg-cyan-400 rounded-xl outline-none shadow-lg shadow-cyan-500 hover:shadow-cyan-600"
          >
            Cancelar
          </button>
        )}
      </div>
    </>
  );
};
