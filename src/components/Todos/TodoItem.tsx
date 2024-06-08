import React from "react";
import { TODO_STATUS } from "../../constants/todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleCheck,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../../actions/todoActions";

function TodoItem(props: any) {
  const dispatch = useDispatch();
  const { job } = props;
  const handleRemoveTodo = (job:any) =>{
    dispatch(removeTodo(job))
  }

  const handleUpdateTodo = (job:any) => {
    dispatch(updateTodo(job))
  }
  return (
    <li className="flex justify-between p-3 border-wrapper relative px-8">
      {job?.status === TODO_STATUS.uncompleted && (
        <div className="flex items-center">
          <FontAwesomeIcon
            className="pr-4 size-6 text-gray-500 hover:cursor-pointer hover:text-gray-700"
            icon={faCircle}
            onClick={()=>{handleUpdateTodo(job)}}
          />
          <span className="text-lg">{job?.text}</span>
        </div>
      )}
      {job?.status === TODO_STATUS.completed && (
        <div className="flex items-center">
          <FontAwesomeIcon
            className=" pr-4 size-6 text-orange-500"
            icon={faCircleCheck}
            onClick={()=>{handleUpdateTodo(job)}}
          />
          <span className=" text-lg opacity-50 line-through">{job?.text}</span>
        </div>
      )}
      <FontAwesomeIcon
        className="hover:cursor-pointer text-orange-500 hover:text-orange-700 size-4 self-center"
        icon={faTrashCan}
        onClick={() => {handleRemoveTodo(job)}}
      />
    </li>
  );
}

export default TodoItem;
