import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Tasks = () => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    //   navigate(`${route}`);
    //   route = "";
    console.log(route);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4">
      <div className="flex justify-between items-center">
        <input
          name="search"
          type="text"
          placeholder="Search here"
          className="input input-bordered w-[65%] mr-4"
        />
        <div className="w-[150px]">
            <Link to="/addtask" className="btn bg-[#1ECCB0] hover:bg-[#48edd2] border-none">
              Add Task
            </Link>
        </div>

        <div className="form-control w-[12%]">
          <select
            onChange={(event) => handleNavigate(event.target.value)}
            className="select select-bordered"
          >
            <option value="no filters">No Filters</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="w-[150px] flex justify-end">
            <Link to="/addtask" className="btn bg-[#1ECCB0] hover:bg-[#48edd2] border-none">
              Delete All
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
