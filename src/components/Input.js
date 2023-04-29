import React, { forwardRef } from "react";

function Input(props, ref) {
  // Handler for calling addTask() when Enter is pressed while focus is in
  // Input box
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Add new task
      props.addTask();
    }
  };

  return (
    <div className="relative w-full">
      <input
        ref={ref}
        type="text"
        className="p-2.5 w-full z-20 text-md rounded-lg border-l-gray-100 border-l-2 border border-gray-300"
        placeholder="Add task"
        onKeyDown={handleKeyDown}
      />
      <button
        type="submit"
        className="absolute top-0 right-0 p-3 text-sm font-medium  text-white bg-blue-700 rounded-r-lg border border-blue-700"
        onClick={props.addTask}
      >
        +
      </button>
    </div>
  );
}

export default forwardRef(Input);
