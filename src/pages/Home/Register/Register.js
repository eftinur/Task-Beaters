import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AUTH_CONTEXT } from "../../../context/AuthProvider";
import { toast } from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AUTH_CONTEXT);
  const [passwordError, setPasswordError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Please provide at least 1 uppercase character");
      console.log(passwordError);
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      setPasswordError("Please provide at least 1 lowercase character");
      console.log(passwordError);
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters");
      return;
    }
    setPasswordError("");

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Welcome to Task Beaters");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        setPasswordError(error.message);
      });
  };

  return (
    <div className="max-w-[1240px] min-h-screen mx-auto px-4 flex justify-center">
      <div className="w-2/4">
        <form onSubmit={handleRegister} className="mt-20 border rounded-xl p-4">
          <h3 className="text-center text-2xl font-medium">Registration</h3>
          <div className="flex flex-col">
            <input
              name="name"
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full mt-4"
            />
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full mt-4"
            />
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full mt-4"
            />
          </div>
          <p className="text-red-500 mt-4">{passwordError}</p>
          <p>
            Already have an account?{" "}
            <Link to="/signin" className="btn-link">
              Sign in
            </Link>
          </p>
          <button className="btn w-2/4 block mt-6 mx-auto bg-[#1ECCB0] hover:bg-[#19a68e] duration-200 outline-none border-none">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
