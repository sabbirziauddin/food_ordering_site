import axios from "axios";
import React, { useEffect } from "react";
import ProductRow from "../../cards /ProductRow";
import { ToastContainer } from "react-toastify";

const ManageAllRecipe = () => {
  const [recipes, setRecipes] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3000/recipes/");
      console.log(response);
      if (response.status === 200) {
        setRecipes(response?.data);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="overflow-x-auto w-full px-16 mt-10">
      <h1 className="text-3xl mb-4">Mange All Recipe</h1>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {recipes?.map((product) => (
            <ProductRow
              key={product?.id}
              product={product}
              recipes={recipes}
              setRecipes={setRecipes}
            />
          ))}
        </tbody>
      </table>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ManageAllRecipe;
