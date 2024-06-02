import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddRecipe = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
  });

  useEffect(() => {
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
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateRecipe = async (e) => {
    e.preventDefault();

    const isConfirmed = window.confirm(
      "Are you sure you want to add this recipe?"
    );
    if (!isConfirmed) {
      return; // Do nothing if not confirmed
    }

    try {
      const reqRecipe = await axios.post(
        "http://localhost:4000/recipes",
        formData
      );
      console.log("Recipe added:", reqRecipe.data);
      toast.success("Recipe added successfully!");

      // Clear form values
      /*  setFormData({
        title: "",
        price: "",
        category: "",
        description: "",
      }); */
    } catch (error) {
      console.error("Error adding recipe:", error);
      toast.error("Failed to add recipe.");
    }
  };

  return (
    <div className="w-full px-16">
      <h1 className="text-4xl mb-4">Add Recipe</h1>
      <form onSubmit={handleCreateRecipe} className="w-full">
        <div className="mb-4">
          <label htmlFor="title">Title </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price">Price </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category">Category </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full py-3 px-5 border"
          >
            <option value="">Select a category</option>
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
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <input
            type="submit"
            value="Add Recipe"
            className="w-full btn py-3 px-5 border btn-primary"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddRecipe;
