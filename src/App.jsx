import { useState } from "react";
// import AddTask from "./components/AddTask";
import Task from "./components/Task";
import AddTask from "./components/AddTask";

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

  function onTaskClick(taskId) {
    // funcao para completar tarefa
    const newTasks = task.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTask(newTasks); // passando a nova lista atualizada
  }

  function onDeleteTaskClick(taskId) {
    // funcao para deletar tarefa
    const newTasks = task.filter((t) => t.id != taskId);
    setTask(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTasks = {
      id: task.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTask([...task, newTasks]);
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 space-y-4">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Task
          tasks={task}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
