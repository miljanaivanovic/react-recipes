import React, { useContext, useState } from "react";
import "./App.css";
import { RecipeContext } from "./RecipeContext";

const CreateRecipes = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");

  const [, , myRecipes, setMyRecipes] = useContext(RecipeContext);

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateIngredients = (e) => {
    setIngredients(e.target.value);
  };

  const updateCalories = (e) => {
    setCalories(e.target.value);
  };

  const updateImage = (e) => {
    setImage(e.target.value);
  };

  const addRecipe = (e) => {
    e.preventDefault();

    setMyRecipes((myRecipes) => [
      ...myRecipes,
      { title, ingredients, calories, image },
    ]);

    setTitle("");
    setIngredients("");
    setCalories("");
    setImage("");
  };

  console.log(myRecipes);

  return (
    <div className="box">
      <div className="create-box">
        <form onSubmit={addRecipe}>
          <br />
          <br />
          <h3>Create your recipe</h3>
          <p>Recipe name:</p>
          <input type="text" name="name" value={title} onChange={updateTitle} />
          <p>Ingrediens:</p>
          <input
            type="text"
            name="ingredients"
            value={ingredients}
            onChange={updateIngredients}
          />
          <p>Calories:</p>
          <input
            type="text"
            name="calories"
            value={calories}
            onChange={updateCalories}
          />
          <p>Image adress:</p>
          <input type="text" name="img" value={image} onChange={updateImage} />
          <br />
          <br />
          <button className="submit-button" type="submit">
            Submit
          </button>
          <br />
        </form>
      </div>
      {myRecipes.map((recipe) => (
        <div className="new-recipe">
          <h1>{recipe.title}</h1>
          <ol>{recipe.ingredients}</ol>
          <p>{recipe.calories}</p>
          <img src={recipe.image} alt="new recipe" className="new-image" />
          <br />
        </div>
      ))}
    </div>
  );
};

export default CreateRecipes;
