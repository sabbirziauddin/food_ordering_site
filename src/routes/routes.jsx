
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Registration from "../pages/Registration";
import PrivateRoute from "./private/PrivateRoute";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import ManageAllRecipe from "../pages/Dashboard/ManageAllRecipe";
import AddRecipe from "../pages/Dashboard/AddRecipe";
import EditRecipe from "../pages/Dashboard/EditRecipe";
import SingleRecipeDetails from "../cards /SingleRecipeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/SingleRecipeDetails/:id",
        element: <SingleRecipeDetails></SingleRecipeDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/SingleRecipeDetails/:id",
        element: <SingleRecipeDetails></SingleRecipeDetails>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "manage-recipes",
        element: <ManageAllRecipe></ManageAllRecipe>,
      },
      { path: "add-recipe", element: <AddRecipe></AddRecipe> },
      {
        path: "edit-recipe/:id",
        element: <EditRecipe />,
      },
    ],
  },
]);