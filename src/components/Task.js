import React, { useState } from "react";
import TaskStyle from "../styles/Task.module.css";

function Task({ task, toggleTaskComplete, deleteTask }) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  let taskStyleClass = `${TaskStyle.task} flex item-center ${
    task.complete ? TaskStyle["task-complete"] : ""
  }`;

  let deleteButtonStyleClass = ` ml-auto ${!hovered ? TaskStyle.hide : ""}`;

  return (
    <div
      className={taskStyleClass}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <input
        type="checkbox"
        id={`checked-checkbox-${task.id}`}
        className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500"
        onChange={() => toggleTaskComplete(task.id)}
        checked={task.complete}
      ></input>

      <label htmlFor={`checked-checkbox-${task.id}`} className="ml-2">
        {task.title}
      </label>

      <button
        className={deleteButtonStyleClass}
        onClick={() => deleteTask(task.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="grey"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
}

export default Task;
