import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

const DetailsCard = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = (data) => {
    fetch(`https://backend-xi-seven.vercel.app/tasks/${data._id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0) {
        toast.success('Task deleted successfully');
        navigate('/home');
      }
    })
  }

  return (
    <div className="max-w-[1240px] min-h-screen mx-auto px-4 my-12">
      <div className="">
        <h3 className="text-2xl text-gray-700 font-medium capitalize my-4">
          {data.title}
        </h3>
        <p className="my-4">{data.description}</p>
        <div className="form-control w-[90px]">
          <label className="cursor-pointer label">
            <span className="label-text">Status:</span>
            <input type="checkbox" className="checkbox checkbox-success" />
          </label>
        </div>
        <div className="my-4">
          <Link to={`/update/${data._id}`}>
            <button className="uppercase btn bg-[#1ECCB0] hover:bg-[#48edd2] border-none mr-4">
              Update
            </button>
          </Link>
          <button onClick={() => handleDelete(data)} className="uppercase btn bg-[#1ECCB0] hover:bg-[#48edd2] border-none mr-4">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
