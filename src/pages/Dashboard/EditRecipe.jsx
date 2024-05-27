import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditRecipe = () => {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await axios.get(`http://localhost:3000/recipes/${id}`);
        if (response.status === 200) {
          setRecipeDetails(response.data);
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    }

    async function fetchCategories() {
      try {
        const response = await axios.get("http://localhost:3000/categories");
        if (response.status === 200) {
          setCategories(response.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
    fetchRecipe();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipeDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCreateRecipe = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/recipes/${id}`, recipeDetails);
      toast.success("Recipe updated successfully!");
    } catch (error) {
      console.error("Error updating recipe:", error);
      toast.error("Failed to update recipe.");
    }
  };

  return (
    <div className="w-full px-16">
      <h1 className="text-4xl mb-4">Edit Recipe</h1>
      <form onSubmit={handleCreateRecipe} className="w-full">
        <div className="mb-4">
          <label htmlFor="title">Title </label>
          <input
            value={recipeDetails.title}
            onChange={handleInputChange}
            type="text"
            name="title"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price">Price </label>
          <input
            type="number"
            name="price"
            value={recipeDetails.price}
            onChange={handleInputChange}
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category">Category </label>
          <select
            name="category"
            value={recipeDetails.category}
            onChange={handleInputChange}
            className="w-full py-3 px-5 border"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="description">Description </label>
          <textarea
            value={recipeDetails.description}
            onChange={handleInputChange}
            name="description"
            className="w-full py-3 px-5 border"
          />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value="Update Recipe"
            className="w-full btn py-3 px-5 border btn-neutral"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditRecipe;
