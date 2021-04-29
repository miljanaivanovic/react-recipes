import React, { useCallback, useEffect, useState, useContext } from "react";
import "./App.css";
import Recipe from "./Recipe";
import { RecipeContext } from "./RecipeContext";

const Home = () => {
  const APP_ID = "b0cd91a0";
  const APP_KEY = "8703b28d29e59a579e76329700f4c60b";

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const [recipes, setRecipes, myRecipes] = useContext(RecipeContext);

  const getRecipes = useCallback(async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();

    const remappedMyRecipes = myRecipes.map((recipe) => {
      return {
        recipe: {
          label: recipe.title,
          ingredients: [{ text: recipe.ingredients }],
          calories: recipe.calories,
          image: recipe.image,
        },
      };
    });

    setRecipes([...remappedMyRecipes, ...data.hits]);
  }, [myRecipes, query, setRecipes]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  useEffect(() => {
    getRecipes();
  }, [getRecipes, query]);

  console.log(recipes);

  return (
    <div className="nav-item">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
