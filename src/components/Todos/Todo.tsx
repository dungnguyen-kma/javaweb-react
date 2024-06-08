import React, { useState } from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { TodoType } from "../../types/todo.type";
import { addTodo, clearCompleted } from "../../actions/todoActions";

const initialState: TodoType = {
  status: 0,
  text: "",
  id: 0,
};

function Todo() {
  const [todoData, setTodoData] = useState<TodoType>(initialState);
  const jobs = useSelector((state: any) => state.todos.todoList);
  const jobCount = jobs.length;
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    setTodoData({
      ...todoData,
      text: event.target.value,
      id: jobCount + 1,
    });
  };

  const handleAdd = (event: any) => {
    event.preventDefault();
    dispatch(addTodo(todoData));
    setTodoData(initialState);
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted())
  }

  return (
    <div className="mt-32 text-center flex flex-col items-center">
      <form className="w-full max-w-lg mb-8" onSubmit={handleAdd}>
        <div className="flex">
          <input
            type="text"
            id="default-search"
            className="block w-full px-4 py-2 text-sm text-gray-900 border rounded-s-3xl bg-red-50 focus:text-black focus:outline-none focus:ring-0"
            placeholder="Bạn đang dự định làm gì?"
            required
            value={todoData?.text}
            onChange={(event) => {
              handleChange(event);
            }}
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
        {jobs.length === 0
          ? "không có công việc nào"
          : jobs.map((job: any, index: React.Key | null | undefined): any => {
              return <TodoItem key={index} job={job} />;
            })}

        <div 
        className="absolute flex items-center bottom-4 right-16 text-orange-500 hover:text-orange-700 hover:cursor-pointer"
        onClick={() =>{handleClearCompleted()}}
        >
          <FontAwesomeIcon icon={faBroom} />
          <div>clear completed</div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
