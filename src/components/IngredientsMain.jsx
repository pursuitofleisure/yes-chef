import React from 'react';
import IngredientsList from './IngredientsList';
import Recipe from './Recipe';
import Loading from './Loading';
import { getRecipeFromChefClaude } from '../ai';

function IngredientsMain() {
  const [ingredients, setIngredients] = React.useState([]);

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

  /* Add smooth scroll */
  const recipeCta = React.useRef(null);
  React.useEffect(() => {
    if (recipe !== '' && recipeCta.current !== null) {
      recipeCta.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [recipe]);

  /* Get recipe API results */
  async function getRecipe() {
    setIsLoading(true);
    const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
    setIsLoading(false);
    setRecipe(recipeMarkdown);
  }

  return (
    <main>
      <div className="description">
        <p>
          <span>✨</span> Add 4 or more ingredients to generate a recipe{' '}
          <span>✨</span>
        </p>
      </div>
      <form
        action={addIngredient}
        name="Add-Ingredients"
        id="form-add-ingredients"
      >
        <div className="form-label-input">
          <label htmlFor="ingredient" className="form-label">
            Ingredient
          </label>
          <input
            type="text"
            name="ingredient"
            id="ingredient"
            placeholder="e.g. flour"
            className="form-input"
          />
        </div>
        <button
          type="submit"
          className="btn form-submit"
          disabled={isLoading ? true : false}
        >
          Add Ingredient
        </button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ref={recipeCta}
          ingredients={ingredients}
          getRecipe={getRecipe}
          isLoading={isLoading}
        />
      )}
      {isLoading && <Loading />}
      {recipe !== '' && <Recipe recipe={recipe} />}
    </main>
  );
}

export default IngredientsMain;
