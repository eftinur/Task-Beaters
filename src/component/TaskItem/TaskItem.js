import React from "react";
import { Link } from "react-router-dom";

const TaskItem = ({ task }) => {

  return (
    <div className="border rounded-xl p-4">
      <p className="text-xl capitalize text-gray-700 font-medium h-16 my-4">
        <Link to={`/tasks/${task._id}`}>{task.title}</Link>
      </p>
      <div className="form-control w-1/3">
        <label className="cursor-pointer label">
          <span className="label-text">Status:</span>
          <input
            name="checkbox"
            type="checkbox"
            className="checkbox checkbox-success"
          />
        </label>
      </div>
    </div>
  );
};

export default TaskItem;
<h3>Task Title</h3>;
