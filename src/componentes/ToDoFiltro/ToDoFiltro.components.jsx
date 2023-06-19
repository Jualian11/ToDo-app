const FiltroContainer = ({ children }) => {
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-cyan-400 border-full border-hidden">
        {children}
      </div>
    </>
  );
};

const ItemsRestantes = ({ total = 0 }) => {
  return (
    <>
      <p className="text-gray-800 text-sm">{total} Items</p>
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
          `hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in-out ` +
          (active.toString().toLowerCase().includes(filter.toLowerCase())
            ? "text-white"
            : "text-gray-700")
        }
      >
        {filter}
      </button>
    </>
  );
};

export { FiltroContainer, ItemsRestantes, FiltroContainerBotones, FiltroBoton };
