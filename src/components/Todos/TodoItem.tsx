import React from "react";
import { TODO_STATUS } from "../../constants/todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleCheck,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";

function TodoItem(props: any) {
  const { job } = props;

  return (
    <li className="flex justify-between p-3 border-wrapper relative px-8">
      {job?.status === TODO_STATUS.uncompleted && (
        <div className="flex items-center">
          <FontAwesomeIcon
            className="pr-4 size-6 text-gray-500 hover:cursor-pointer hover:text-gray-700"
            icon={faCircle}
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
          <span className=" text-lg opacity-50 line-through">{job?.text}</span>
        </div>
      )}
      <FontAwesomeIcon
        className="hover:cursor-pointer text-orange-500 hover:text-orange-700 size-4 self-center"
        icon={faTrashCan}
      />
    </li>
  );
}

export default TodoItem;
