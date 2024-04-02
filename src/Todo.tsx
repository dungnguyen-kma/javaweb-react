import React, { useEffect, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleCheck,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { faBroom } from "@fortawesome/free-solid-svg-icons";
import { TODO_STATUS } from "./constants/todo";
import { getJobs, addJob, updateJob, deleteJob } from "./api/todoApi";

function Todo() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState<string[]>([]);
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    getJobs().then((res): void => {
      setJobs(res);
    });
  }, [reloadData]);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    addJob({
      text: job,
      status: 0,
    }).then((): void => {
      setReloadData(!reloadData);
    });
    setJob("");
  };

  const handleUpdateCompleted = (id: number, data: any): any => {
    updateJob(id, { ...data, status: 1 }).then(() => {
      setReloadData(!reloadData);
    });
  };

  const handleDelete = (id:number) => {
    deleteJob(id).then(() =>{setReloadData(!reloadData)})
  }

  const handleClearCompleted = async () => {
    const completedJobs:any[] = jobs.filter((job:any) => job?.status === TODO_STATUS.completed)
    for (const job of completedJobs) {
      await deleteJob(job?.id)
    }
    setReloadData(!reloadData)
  }

  return (
    <div className="mt-32 text-center flex flex-col items-center">
      <form className="w-full max-w-lg mb-8" onSubmit={handleSubmit}>
        <div className="flex">
          <input
            type="text"
            id="default-search"
            className="block w-full px-4 py-2 text-sm text-gray-900 border rounded-s-3xl bg-red-50 focus:text-black focus:outline-none focus:ring-0"
            placeholder="Bạn đang dự định làm gì?"
            value={job}
            required
            onChange={(e) => {
              setJob(e.target.value);
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
        {jobs.length===0? "không có công việc nào" : jobs.map((job: any, index): any => {
          return (
            <li
              key={index}
              className="flex justify-between p-3 border-wrapper relative px-8"
            >
              {job?.status === TODO_STATUS.uncompleted && (
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="pr-4 size-6 text-gray-500 hover:cursor-pointer hover:text-gray-700"
                    icon={faCircle}
                    onClick={() => handleUpdateCompleted(job?.id, job)}
                  />
                  <span className="text-lg">{job?.text}</span>
                </div>
              )}
              {job?.status === TODO_STATUS.completed && (
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className=" pr-4 size-6 text-orange-500"
                    icon={faCircleCheck}
                  />
                  <span className="text-lg opacity-50 line-through">
                    {job?.text}
                  </span>
                </div>
              )}
              <FontAwesomeIcon
                className="hover:cursor-pointer text-orange-500 hover:text-orange-700 size-4 self-center"
                icon={faTrashCan}
                onClick={() => {handleDelete(job?.id)}}
              />
            </li>
          );
        })}

        <div onClick={handleClearCompleted} className="absolute flex items-center bottom-4 right-16 text-orange-500 hover:text-orange-700 hover:cursor-pointer">
          <FontAwesomeIcon icon={faBroom} />
          <div>clear completed</div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
