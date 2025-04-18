import React, { useState } from "react";
import Input from "./input";
import Button from "./Button";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa: "
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa: "
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Button
        onClick={() => {
          // verificar se o title e a description estão preenchidas
          if (!title.trim() || !description.trim()) {
            return alert("preencha o título e a descrição da tarefa");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </Button>
    </div>
  );
}

export default AddTask;
