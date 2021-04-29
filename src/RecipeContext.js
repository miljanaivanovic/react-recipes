import { createContext, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);

  return (
    <RecipeContext.Provider
      value={[recipes, setRecipes, myRecipes, setMyRecipes]}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
