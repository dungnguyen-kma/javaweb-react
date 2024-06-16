import React, { useState } from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom } from "@fortawesome/free-solid-svg-icons";
import TodoItem from "./TodoItem";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addJob, getJobs } from "../../api/todoApi";

const initialTodo = {
  text: "",
  status: 0,
};

function Todo() {
  const [newTodo, setNewTodo] = useState<any>(initialTodo);
  const queryClient = useQueryClient();

  const result = useQuery({
    queryKey: ["todos"],
    queryFn: () => getJobs(),
  });

  const mutation = useMutation({
    mutationFn: (newTodo) => addJob(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    mutation.mutate(newTodo);
    setNewTodo(initialTodo);
  };

  const handleChange = (event: any) => {
    setNewTodo({
      ...newTodo,
      text: event.target.value,
    });
  };

  const jobs = result?.data;
  return (
    <div className="mt-32 text-center flex flex-col items-center">
      <form className="w-full max-w-lg mb-8" onSubmit={handleSubmit}>
        <div className="flex">
          <input
            type="text"
            id="default-search"
            className="block w-full px-4 py-2 text-sm text-gray-900 border rounded-s-3xl bg-red-50 focus:text-black focus:outline-none focus:ring-0"
            placeholder="Bạn đang dự định làm gì?"
            required
            onChange={(event) => {
              handleChange(event);
            }}
            value={newTodo?.text}
          />
          <button
            type="submit"
            className="text-white end-0 bottom-0 hover:bg-blue-500 focus:outline-none font-medium rounded-e-3xl text-sm px-4 py-2 bg-blue-300"
          >
            ADD
          </button>
        </div>
      </form>
      <div className="relative w-full max-w-lg list-none bg-red-50 rounded-3xl pb-20">
        {jobs?.length === 0
          ? "không có công việc nào"
          : jobs?.map((job: any, index: React.Key | null | undefined): any => {
              return <TodoItem key={index} job={job} />;
            })}

        <div className="absolute flex items-center bottom-4 right-16 text-orange-500 hover:text-orange-700 hover:cursor-pointer">
          <FontAwesomeIcon icon={faBroom} />
          <div>clear completed</div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
