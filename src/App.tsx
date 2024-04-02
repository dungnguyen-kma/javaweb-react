import React, { useEffect, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTrashCan,
  faCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faBroom } from "@fortawesome/free-solid-svg-icons";
import { getJobs, addJob, deleteJob } from "./api/todoApi";
import { TODO_STATUS } from "./constants/todo";

function App() {
  const [todos, setTodos] = useState<any[]>([]);
  const [job, setJob] = useState<string>();
  const [reloadData, setReloadData] = useState(false);

  // call api
  useEffect(() => {
    getJobs().then((data: any) => {
      setTodos(data);
    });
  }, [reloadData]);

  const handleAddJob = (event: any) => {
    event.preventDefault();
    addJob({
      status: TODO_STATUS.uncompleted,
      text: job,
    }).then(() => {
      setReloadData(!reloadData);
    });
    setJob("");
  };

  const handleDelete=(id:any) =>{
    deleteJob(id)
    setReloadData(!reloadData)
  }

  return (
    <div className="mt-32 text-center flex flex-col items-center">
      <form className="w-full max-w-lg mb-8">
        <div className="flex">
          <input
            type="text"
            id="default-search"
            className="block w-full px-4 py-2 text-sm text-gray-900 border rounded-s-3xl bg-red-50 focus:text-black focus:outline-none focus:ring-0"
            placeholder="What do you need to do?"
            required
            onChange={(event: any) => {
              setJob(event.target.value);
            }}
            value={job}
          />
          <button
            type="submit"
            className="text-white end-0 bottom-0 hover:bg-blue-700 focus:outline-none font-medium rounded-e-3xl text-sm px-4 py-2 bg-blue-500"
            onClick={(event) => {
              handleAddJob(event);
            }}
          >
            ADD
          </button>
        </div>
      </form>
      <div className="relative w-full max-w-lg list-none bg-red-50 rounded-3xl pb-20">
        {todos.map((job) => {
          return (
            <li
              key={job?.id}
              className="flex justify-between p-3 border-wrapper relative px-8"
            >
              {job?.status === TODO_STATUS.uncompleted && (
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="hover:cursor-pointer pr-4 size-6 text-gray-500 hover:text-gray-700"
                    icon={faCircle}
                  />
                  <span className="text-lg">{job?.text}</span>
                </div>
              )}
              {job?.status === TODO_STATUS.completed && (
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="pr-4 size-6 text-orange-500"
                    icon={faCircleCheck}
                  />
                  <span className="text-lg line-through opacity-50">
                    {job?.text}
                  </span>
                </div>
              )}
              <FontAwesomeIcon
                className="hover:cursor-pointer text-orange-500 hover:text-orange-700 size-4 self-center"
                icon={faTrashCan}
                onClick={() =>{handleDelete(job?.id)}}
              />
            </li>
          );
        })}
        <div className="absolute flex items-center bottom-4 right-16 text-orange-500 hover:text-orange-700 hover:cursor-pointer">
          <FontAwesomeIcon icon={faBroom} />
          <div>clear completed</div>
        </div>
      </div>
    </div>
  );
}

export default App;
