import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const [refetch, setRefetch] = useState(false);

  const {
    data: foodData,
    error,
    isPending,
  } = useFetch("http://localhost:3000/foods",refetch);

  const deleteRecipe = (id) => {
    fetch("http://localhost:3000/foods/" + id, {
      method: "DELETE",
    })
    .then((data) => {
      return data.json();
    })
    .catch((error) => {
      console.log(error);
    });
  };

  if (error) {
    return <h1 className="text-center text-4xl mt-48 font-bold">{error}</h1>;
  }

  if (isPending) {
    return <h1 className="text-center text-4xl mt-48 font-bold">Loading...</h1>;
  }

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
        {foodData && foodData.map((food) => (
          <li key={food.id} className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img src={food.img} alt="Food" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{food.name}</h2>
              <p>
                Country: {food.type} <br />
                Price: ${food.price}
              </p>
              <br />
              <p>{food.description}</p>
              <div className="card-actions justify-end">
                <Link
                  to={`/SingleRecipe/${food.id}`}
                  className="btn btn-primary w-full"
                >
                  Read More
                </Link>
                <button className="btn btn-secondary w-full" onClick={() => deleteRecipe(food.id)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;