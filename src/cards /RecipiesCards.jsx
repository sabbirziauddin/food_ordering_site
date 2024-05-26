const RecipiesCards = ({ recipe }) => {
  return (
    <div className="card bg-base-300 shadow-xl rounded-lg overflow-hidden ">
      <figure>
        <img
          src={recipe?.image || "default-image.jpg"}
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
        <div className="card-actions justify-end">
          <div className="badge badge-outline p-2">{recipe?.category}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipiesCards;
