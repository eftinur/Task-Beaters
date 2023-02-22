import React from "react";
import { Link } from "react-router-dom";

const TaskItem = ({ task }) => {
  return (
    <div className="flex justify-between items-center border-b px-4 py-2">
      <div className="w-[50%]">
        <p className="text-xl capitalize text-gray-700 font-medium my-4">
          {task.title}
        </p>
      </div>
      <>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Status:</span>
            <input
              name="checkbox"
              type="checkbox"
              className="checkbox checkbox-success ml-3"
            />
          </label>
        </div>
      </>
      <>
        <Link to={`/tasks/${task._id}`}>
          <button className="btn btn-sm bg-[#1ECCB0] hover:bg-[#48edd2] border-none capitalize">See Details</button>
        </Link>
      </>
    </div>
  );
};

export default TaskItem;
<h3>Task Title</h3>;
