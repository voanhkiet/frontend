import React from "react";

const ProductCard = ({ painting }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white">
      <img src={painting.image} alt={painting.title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{painting.title}</h2>
      <p className="text-gray-500">${painting.price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700">Buy Now</button>
    </div>
  );
};

export default ProductCard;
