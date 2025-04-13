import { useState } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      title: "Teste",
      description: "testetesteteste",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Teste2",
      description: "testetesteteste2",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Teste3",
      description: "testetesteteste3",
      isCompleted: false,
    },
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 justify-center p-6">
      <h1 className="text-3xl text-slate-100 font-bold text-center">
        Gerenciador de Tarefas
      </h1>
      <Task tasks={task} />
    </div>
  );
}

export default App;
