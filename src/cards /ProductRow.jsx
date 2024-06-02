import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductRow = ({ product, recipes, setRecipes, _id }) => {
  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to Delete this recipe?"
    );
    if (!isConfirmed) {
      return; // Do nothing if not confirmed
    }
    const response = await axios.delete(
      `http://localhost:4000/recipes/${product?._id}`
    );
    if (response.status === 200) {
      toast.success("Recipe deleted successfully!");
      setRecipes(recipes.filter((recipe) => recipe._id !== product._id));
    } else {
      toast.error("Failed to delete recipe.");
    }
  };

  return (
    <tr className="hover:bg-gray-100">
      <th className="p-4 border-t border-gray-200">{product?._id}</th>
      <td className="p-4 border-t border-gray-200">{product?.title}</td>
      <td className="p-4 border-t border-gray-200">${product?.price}</td>
      <td className="p-4 border-t border-gray-200">{product?.category}</td>
      <td className="p-4 border-t border-gray-200 flex gap-2">
        <Link
          to={`/dashboard/edit-recipe/${product?.id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit
        </Link>
        <button onClick={handleDelete} className="btn btn-xs btn-error">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
