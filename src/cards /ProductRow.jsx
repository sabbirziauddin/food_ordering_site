import React from "react";
import { Link } from "react-router-dom";

const ProductRow = ({ product }) => {
  return (
    <tr className="hover:bg-gray-100">
      <th className="p-4 border-t border-gray-200">{product?.id}</th>
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
        <button className="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default ProductRow;
