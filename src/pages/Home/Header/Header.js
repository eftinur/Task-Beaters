import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AUTH_CONTEXT } from "../../../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AUTH_CONTEXT);
  const [isActive, setIsActive] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <section className="py-3">
      <nav className="navbar max-w-[1240px] mx-auto px-4">
        <Link className="flex justify-center items-center" to="/">
          <h2>Task Beaters</h2>
        </Link>
        <ul
          onClick={() => setIsActive(false)}
          className={isActive ? "nav-links-mobile" : "nav-links"}
        >
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          {user ? (
            <>
              <span className="text-gray-300">{user?.email}</span>
              <li>
                <button
                  onClick={handleLogOut}
                  className="uppercase btn-link px-2"
                >
                  Sign out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
        <button
          onClick={() => setIsActive(!isActive)}
          className="toggle-btn text-2xl"
        >
          {isActive ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>
    </section>
  );
};

export default Header;
