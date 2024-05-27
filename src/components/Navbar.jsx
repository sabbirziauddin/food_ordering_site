import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { logOut,user} = useAuth();

  const handleLogout =async()=>{
    await logOut();
  }
  
  return (
    <div className="navbar bg-base-100 sticky top-0 px-16 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>All Recepies</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <a className=" text-xl">food</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-6 px-1">
          <li>
            <a>All Recepies</a>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      {!user?.email ? (
        <div className="navbar-end flex gap-4">
          <Link to={"/login"} className="btn">
            Login
          </Link>
          <Link to={"/register"} className="btn">
            Registration
          </Link>
        </div>
      ) : (
        <div className="navbar-end flex gap-4">
          <div>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div>
            <Link to={"/dashboard"} className="btn">
              Dashboard
            </Link>
          </div>

          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-8">
              <span>SZ</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;


{/* <div className="navbar bg-base-100 sticky top-0 px-16 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
              </>
            )}
            {user && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
            {user && (
              <li>
                <button
                  onClick={handleLogout}
                  className="btn bg-red-500 text-white"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          {!user && (
            <>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
            </>
          )}
          {user && (
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {user && (
          <button
            onClick={handleLogout}
            className="btn bg-red-500 text-white hidden lg:block"
          >
            Logout
          </button>
        )}
        <div className="avatar">
          <div className="w-12 rounded-full border-2 border-black">
            <img src={user?.photoURL || "/public/placeholder.jpg"} />
          </div>
        </div>
      </div>
    </div> */}