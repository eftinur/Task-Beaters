import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AUTH_CONTEXT } from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
const AddTask = () => {
  const { user } = useContext(AUTH_CONTEXT);
  const [warning, setWarning] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    if (title.length > 50) {
      return setWarning("Maximum 50 characters allowed");
    }

    if (description.length > 256) {
      return setWarning("Maximum 256 characters allowed");
    }

    handleAddingTask(user?.email, title, description);
  };

  const handleAddingTask = (email, title, description) => {
    const newTask = {
      email: email,
      title: title,
      description: description,
    };

    fetch("https://backend-xi-seven.vercel.app/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    toast.success("Task added successcully");
    navigate("/home");
  };

  return (
    <div className="max-w-[1240px] min-h-screen mx-auto px-4 flex justify-center">
      <div className="w-2/4">
        <form onSubmit={handleSubmit} className="mt-20 border rounded-xl p-4">
          <h3 className="text-center text-2xl font-medium">Add New Task</h3>
          <div className="flex flex-col">
            <input
              name="title"
              type="text"
              placeholder="Enter task title"
              className="input input-bordered w-full mt-4"
            />
            <textarea
              name="description"
              className="textarea textarea-bordered w-full mt-4 text-base"
              rows="8"
              cols="50"
              placeholder="Task description"
            ></textarea>
          </div>
          <p className="text-red-600 mt-4">{warning}</p>

          <button className="btn w-full block mt-6 mx-auto bg-[#1ECCB0] hover:bg-[#48edd2] duration-200 outline-none border-none">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
