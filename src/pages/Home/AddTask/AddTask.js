import React from "react";

const AddTask = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 flex justify-center">
      <div className="w-2/4">
        <form className="mt-20 border rounded-xl p-4">
          <h3 className="text-center text-2xl font-medium">Add New Task</h3>
          <div className="flex flex-col">
            <input
              name="title"
              type="text"
              placeholder="Enter task title"
              className="input input-bordered w-full mt-4"
            />
            <textarea
              className="textarea textarea-bordered w-full mt-4 text-base"
              rows="4"
              cols="50"
              placeholder="Task description"
            ></textarea>
          </div>

          <button className="btn w-full block mt-6 mx-auto bg-[#1ECCB0] hover:bg-[#48edd2] duration-200 outline-none border-none">
            Create task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
