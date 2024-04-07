import { useState } from "react";

function Create() {
  const [ingredient, setIngredient] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (e) => {
    e.preventDefault();
    if (ingredient.trim() === "") {
      alert("Please enter an ingredient");
    } else if (!ingredients.includes(ingredient)) {
      setIngredients((prev) => {
        return [...prev, ingredient];
      });
      alert("Successfully toasted!");
    } else {
      alert("Ingredient already exists");
    }
    setIngredient("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      name,
      img,
      type,
      price,
      ingredients,
      description
    };
    fetch("http://localhost:3000/foods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRecipe),
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-128">
      <h1 className="text-3xl text-center font-bold mb-10">
        Create New Recipe
      </h1>

      <form className="flex items-center flex-col gap-5" onSubmit={handleSubmit}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Food name:</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ingredients:</span>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                setIngredient(e.target.value);
              }}
              value={ingredient}
            />
            <button onClick={addIngredient} className="btn-secondary btn">
              Add
            </button>
          </div>
          <div>
            <p>
              Ingredients:{" "}
              {ingredients.map((ing, index) => {
                if (index === ingredients.length - 1) {
                  return <span key={ing}>{ing}</span>;
                } else {
                  return <span key={ing}>{ing}, </span>;
                }
              })}
            </p>
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Price:</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Calories:</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Country:</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setType(e.target.value)}
            value={type}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Image URL:</span>
          </div>
          <input
            type="url"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setImg(e.target.value)}
            value={img}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </label>

        <button type="submit" className="btn btn-secondary w-full max-w-xs">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;