import React from 'react';
import IngredientsList from './IngredientsList';
import Recipe from './Recipe';
import { getRecipeFromMistral } from '../ai';

function IngredientsMain() {
  const [ingredients, setIngredients] = React.useState([
    'butter',
    'oil',
    'eggs',
    'flour',
  ]);
  const [recipe, setRecipe] = React.useState('');

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');
    setIngredients((prevIngredients) => {
      return [...prevIngredients, newIngredient];
    });
  }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  return (
    <main>
      <form
        action={addIngredient}
        name="Add-Ingredients"
        id="form-add-ingredients"
      >
        <div className="form-label-input">
          <label htmlFor="ingredient">Add Ingredient</label>
          <input
            type="text"
            name="ingredient"
            id="ingredient"
            placeholder="e.g. oregano"
            className="form-input"
          />
        </div>
        <button type="submit" className="form-submit">
          Add Ingredient
        </button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}
      {recipe !== '' && <Recipe recipe={recipe} />}
    </main>
  );
}

export default IngredientsMain;
