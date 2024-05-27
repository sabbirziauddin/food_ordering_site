import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const { logOut } = useAuth();

  const handleLogout = async () => {
    await logOut();
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center p-6 bg-gray-100">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden mt-4"
        >
          Open menu
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-60 min-h-screen bg-base-200 text-base-content flex flex-col justify-between">
          {/* Sidebar content here */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
            <ul>
              <li className="mb-2">
                <Link
                  to={"/dashboard/manage-recipes"}
                  className="btn btn-outline btn-primary w-full text-left"
                >
                  Manage All Recipes
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard/add-recipe"}
                  className="btn btn-outline btn-primary w-full text-left"
                >
                  Add Recipe
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 mt-4">
            <Link to={"/"} className="btn btn-neutral w-full">
              Home
            </Link>
            <button className="btn btn-error w-full" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
