import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import TaskItem from "../../../component/TaskItem/TaskItem";
import { AUTH_CONTEXT } from "../../../context/AuthProvider";
import Loader from "../../../component/Loader/Loader";

const Tasks = () => {
  const [search, setSearch] = useState("");
  const { user } = useContext(AUTH_CONTEXT);
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(`${route}`);
    route = "";
  };

  const url = `https://backend-xi-seven.vercel.app/tasks?email=${user?.email}`;
  const { data, isLoading } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="max-w-[1240px] min-h-screen mx-auto px-4">
      <div className="flex justify-between items-center">
        <input
          onChange={(e) => setSearch(e.target.value)}
          name="search"
          type="text"
          placeholder="Search here"
          className="input input-bordered w-[65%] mr-4"
        />
        <div className="w-[150px]">
          <Link
            to="/addtask"
            className="btn bg-[#1ECCB0] hover:bg-[#48edd2] border-none"
          >
            Add Task
          </Link>
        </div>

        <div className="form-control w-[12%]">
          <select
            onChange={(event) => handleNavigate(event.target.value)}
            className="select select-bordered font-medium"
          >
            <option value="no filters">No Filters</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="w-[150px] flex justify-end">
          <button className="btn bg-[#1ECCB0] hover:bg-[#48edd2] border-none">
            Delete All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 my-12 gap-4">
        {data
          .filter((task) => {
            return search?.toLowerCase() === ""
              ? task
              : task.title.toLowerCase().includes(search);
          })
          ?.map((task) => (
            <TaskItem key={task._id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default Tasks;
