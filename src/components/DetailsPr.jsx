import React from "react";

const DetailsPr = ({ product, onDelete, }) => {
  const { recipe_name, recipe_image, price } = product;

  return (
    <div className="flex items-center gap-4 bg-white shadow-md rounded-lg p-4 border">
      <img
        src={recipe_image}
        alt={recipe_name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{recipe_name}</h2>
        <p className="text-sm text-gray-500">Price: ${price}</p>
      </div>
      <button
        onClick={() => onDelete(product.recipe_id)}
        className="btn btn-sm btn-error"
      >
        Delete
      </button>
    </div>
  );
};

export default DetailsPr;
