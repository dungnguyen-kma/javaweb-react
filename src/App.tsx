import React, { useReducer, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
// initstate
const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];
// actions
const checkAction = (data: any) => {
  return {
    type: "COMPLETE",
    id: data.id,
  };
};

const changeTitleAction = (data: any) => {
  return {
    type: "CHANGE_TITLE",
    id: data.id,
    title: data.title,
  };
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo: any) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case "CHANGE_TITLE":
      return state.map((todo: any) => {
        if (todo.id === action.id) {
          return { ...todo, title: action.title };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [currentItem, setCurrentItem] = useState<any>({});
  console.log(currentItem)

  const handleCheck = (todo: any) => {
    dispatch(checkAction(todo));
  };

  const handleChangeTitle = () => {
    dispatch(changeTitleAction(currentItem));
    setCurrentItem({});
  };

  const handleChangeValue = (event: any) => {
    setCurrentItem({
      ...currentItem,
      title: event.target.value,
    });
  };

  return (
    <div>
      {todos.map((todo: any) => (
        <div key={todo.id}>
          <label className="mr-3">
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleCheck(todo)}
            />
            {todo.title}
          </label>
          <FontAwesomeIcon
            icon={faFilePen}
            onClick={() => {
              setCurrentItem(todo);
            }}
          />
        </div>
      ))}
      <input
        className="block w-52 text-sm text-gray-900 border focus:text-black focus:outline-none focus:ring-0"
        type="text"
        value={currentItem.title || ""}
        onChange={(event) => handleChangeValue(event)}
      />
      <button
        className="text-white end-0 bottom-0 rounded-md px-1 hover:bg-blue-500 focus:outline-none font-medium text-sm bg-blue-800"
        onClick={() => handleChangeTitle()}
      >
        Change title
      </button>
    </div>
  );
}
export default App;
