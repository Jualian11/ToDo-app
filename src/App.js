import "./App.css";
import { Titulo } from "./componentes/Titulo";
import PageGlobal from "./componentes/PageGlobal";

function App() {
  return (
    <>
      <div className="bg-cyan-200 min-h-screen w-full h-full text-gray-700 flex flex-col items-center py-2 px-10">
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

