import React from 'react';
import IngredientsList from './IngredientsList';
import Recipe from './Recipe';
import Loading from './Loading';
import { getRecipeFromMistral } from '../ai';

function IngredientsMain() {
  /* TODO: remove hard-coded ingredients when done testing */
  const [ingredients, setIngredients] = React.useState([
    'butter',
    'oil',
    'eggs',
    'flour',
  ]);

  /* Set state for loading */
  const [isLoading, setIsLoading] = React.useState(false);

  /* Set state for recipe API return */
  const [recipe, setRecipe] = React.useState('');

  /* Add user ingrededients to state */
  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');
    setIngredients((prevIngredients) => {
      return [...prevIngredients, newIngredient];
    });
  }

  /* Get recipe API results */
  async function getRecipe() {
    setIsLoading(true);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setIsLoading(false);
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
      {isLoading && <Loading />}
      {recipe !== '' && <Recipe recipe={recipe} />}
    </main>
  );
}

export default IngredientsMain;
