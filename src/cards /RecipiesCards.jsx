import { Link } from "react-router-dom";
import imaage from "../assets/pizza-1.png";

const RecipiesCards = ({ recipe }) => {
  const { id } = recipe;
  return (
    <div className="card bg-base-300 shadow-xl rounded-lg overflow-hidden ">
      <figure>
        <img
          src={imaage || "default-image.jpg"}
          alt={recipe?.title}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-2xl font-semibold mb-2">
          {recipe?.title}
        </h2>
        <h3 className="text-xl text-green-600 font-bold mb-4">
          ${recipe?.price}
        </h3>
        <p className="text-gray-700 mb-4">
          {recipe?.description?.length > 30
            ? `${recipe?.description?.slice(0, 30)}...`
            : recipe?.description}
          {recipe?.description?.length > 30 && (
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
          )}
        </p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline p-4">{recipe?.category}</div>
          <Link to={`/SingleRecipeDetails/${id}`}>
            <button className=" badge badge-outline bg-blue-500 text-white p-4 ">
              View Recipe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipiesCards;
