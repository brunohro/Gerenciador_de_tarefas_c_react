import AddTask from "./components/AddTask";
import Task from "./components/Task";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <h1 className="text-red-500">Gerenciador de Tarefas</h1>
      <Task />
      <AddTask />
    </div>
  );
}

export default App;
