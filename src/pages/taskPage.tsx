import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";
import Button from "../components/button";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center mb-6 gap-8">
          <Button onClick={() => navigate(-1)}>
            <ChevronLeftIcon />
          </Button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
