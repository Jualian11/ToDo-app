const FiltroContainer = ({ children }) => {
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-400">
        {children}
      </div>
    </>
  );
};

const ItemsRestantes = ({ total = 0 }) => {
  return (
    <>
      <p className="text-gray-400 text-sm">{total} Items Restantes</p>
    </>
  );
};

const FiltroContainerBotones = ({ children }) => {
  return (
    <>
      <div className="flex items-center space-x-2">{children}</div>
    </>
  );
};

const FiltroBoton = ({ action, active, filter }) => {
  return (
    <>
      <button
      onClick={action}
        className={
          `hover:text-white cursor-pointer transition-all duration-300 ease-in-out ` +
          (active.toString().toLowerCase().includes(filter.toLowerCase())
            ? "text-blue-400"
            : "text-gray-400")
        }
      >
        {filter}
      </button>
    </>
  );
};

export { FiltroContainer, ItemsRestantes, FiltroContainerBotones, FiltroBoton };
