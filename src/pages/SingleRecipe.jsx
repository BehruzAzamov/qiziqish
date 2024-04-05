import React from "react";
import { useParams } from "react-router-dom";
import foodData from "../../data/db.json";

const SingleRecipe = () => {
  const { id } = useParams();
  const selectedFood = foodData.foods.find((food) => food.id === parseInt(id));

  return (
    <div className="w-128 ">
      <h1 className="text-3xl font-bold  mb-4">{selectedFood.name}</h1>
      <img
        className="w-full h-[400px] rounded-lg mb-4 h-96"
        src={selectedFood.img}
        alt={selectedFood.name}
      />
      <h2 className="text-lg text-xl font-semibold">
        Country: {selectedFood.type}
      </h2>
      <h2 className="text-lg text-xl font-semibold">
        Price: ${selectedFood.price}
      </h2>
      <br />
      <p className="text-lg text-xl">Description:{selectedFood.description}</p>
      <h3 className="mt-6 text-xl font-semibold ">Ingredients:</h3>
      <ul className="list-disc ml-6 text-lg">
        {selectedFood.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default SingleRecipe;