// SingleRecipeDetails.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import imaages from "../assets/pizza-1.png";

const SingleRecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/recipes/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch recipe details");
        }
        const data = await response.json();
        console.log(data);
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={imaages || "default-image.jpg"}
            alt={recipe?.title}
            className="rounded-xl w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-semibold mb-2 text-gray-800">
            {recipe?.title}
          </h2>
          <h3 className="text-xl text-green-600 font-bold mb-4">
            ${recipe?.price}
          </h3>
          <p className="text-gray-700 mb-4">
            {recipe?.description?.length > 60
              ? `${recipe?.description?.slice(0, 60)}...`
              : recipe?.description}
            {recipe?.description?.length > 60 && (
              <a href="#" className="text-blue-500 hover:underline ml-1">
                Read more
              </a>
            )}
          </p>
          <div className="card-actions flex justify-center mt-4">
            <button className="btn btn-secondary badge badge-outline p-6 bg-gray-100 text-gray-800 mr-4">
              {recipe?.category}
            </button>
            <Link to={`/home`} className="btn btn-secondary">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipeDetails;

/* import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const SingleRecipeDetails = () => {
  const { id } = useParams();

  const [singleRecipe, setSingleRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSingleRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:3000/recipes/${id}`);
        const data = await response.json();
        console.log(data);
        setSingleRecipe(data);
        setLoading(false);
      } catch (error) {}
    };
  }, []);

  return (
    <div className="card bg-base-300 shadow-xl rounded-lg overflow-hidden ">
      <figure>
        <img
          src={singleRecipe?.image || "default-image.jpg"}
          alt={singleRecipe?.title}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-2xl font-semibold mb-2">
          {singleRecipe?.title}
        </h2>
        <h3 className="text-xl text-green-600 font-bold mb-4">
          ${singleRecipe?.price}
        </h3>
        <p className="text-gray-700 mb-4">
          {singleRecipe?.description?.length > 30
            ? `${singleRecipe?.description?.slice(0, 30)}...`
            : singleRecipe?.description}
          {singleRecipe?.description?.length > 30 && (
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
          )}
        </p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline p-4">
            {singleRecipe?.category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipeDetails;
 */
