import React, { useState } from "react";
import "./App.css";

const CreateRecipes = () => {

    const [title, setTitle] = useState ('');
    const [ingredients, setIngredients] = useState ('');
    const [calories, setCalories] = useState ('');
    const [image, setImage] = useState ('');

    const updateTitle = e => {
        setTitle(e.target.value);
    }

    const updateIngredients = e => {
        setIngredients(e.target.value);
    }

    const updateCalories = e => {
        setCalories(e.target.value);
    }

    const updateImage = e => {
        setImage(e.target.value);
    }

    const addRecipe = e => {                                                                                                                                                                                                                                               
        e.preventDefault();
    }

    return(
        <div className="box">
            <div className="create-box">
                <form onSubmit={addRecipe}>
                    <br/><br/>
                    <h3>Create your recipe</h3>
                    <p>Recipe name:</p>
                    <input type="text" name="name" value={title} onChange={updateTitle}/>
                    <p>Ingrediens:</p>
                    <input type="text" name="ingredients" value={ingredients} onChange={updateIngredients}/>
                    <p>Calories:</p>
                    <input type="text" name="calories" value={calories} onChange={updateCalories}/>
                    <p>Image adress:</p>
                    <input type="text" name="img" value={image} onChange={updateImage}/><br/><br/>
                    <button className="submit-button" type="submit">Submit</button><br/>
                </form>
            </div>
            <div className="new-recipe">
                <form>
                    <h1>{title}</h1>
                    <ol>
                        {ingredients}
                    </ol>
                    <p>{calories}</p>
                    <img src={image} className="new-image"/>
                    <br/>
                </form>
            </div>
        </div>
    );
}

export default CreateRecipes;