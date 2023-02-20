import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const UpdateTask = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const [warning, setWarning] = useState("");

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

    handleUpdate(title, description);
  };

  const handleUpdate = (title, description) => {
    const updatedTask = {
      title: title,
      description: description,
    };

    fetch(`https://backend-xi-seven.vercel.app/tasks/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Task updated successfully");
        navigate("/home");
      });
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 flex justify-center">
      <div className="w-2/4">
        <form onSubmit={handleSubmit} className="mt-20 border rounded-xl p-4">
          <h3 className="text-center text-2xl font-medium">Add New Task</h3>
          <div className="flex flex-col">
            <input
              defaultValue={data.title}
              name="title"
              type="text"
              placeholder="Enter task title"
              className="input input-bordered w-full mt-4"
            />
            <textarea
              defaultValue={data.description}
              name="description"
              className="textarea textarea-bordered w-full mt-4 text-base"
              rows="8"
              cols="50"
              placeholder="Task description"
            ></textarea>
          </div>
          <p className="text-red-600 mt-4">{warning}</p>

          <button className="btn w-full block mt-6 mx-auto bg-[#1ECCB0] hover:bg-[#48edd2] duration-200 outline-none border-none">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
