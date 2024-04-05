import React from "react";
import foodData from "../../data/db.json";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p className="mb-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, labore
        hic non corporis nemo autem assumenda rem laborum, suscipit eveniet
        sapiente numquam officia temporibus cum praesentium dignissimos ducimus
        quisquam expedita?
      </p>
      <ul className="grid lg:grid-cols-3 md:grid-cols-2">
        {foodData.foods.map((food) => (
          <li key={food.id} className="card w-80 bg-base-100 shadow-xl">
            <figure><img src={food.img} alt="Food" /></figure>
            <div className="card-body">
              <h2 className="card-title">{food.name}</h2>
              <p>Country: {food.type} <br />
              Price: {food.price}</p>
              <br />
              <p>{food.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/SingleRecipe/${food.id}`} className="btn btn-primary w-full">Read More</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
