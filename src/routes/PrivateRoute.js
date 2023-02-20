import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../component/Loader/Loader";
import { AUTH_CONTEXT } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AUTH_CONTEXT);
  const location = useLocation();

  if (loader) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signin" />;
};

export default PrivateRoute;
