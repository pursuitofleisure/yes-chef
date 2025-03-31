import React from 'react';
import IngredientsList from './IngredientsList';
import Recipe from './Recipe';

function IngredientsMain() {
  const [ingredients, setIngredients] = React.useState([]);
  const [isRecipeShown, setIsRecipeShown] = React.useState(false);

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');
    setIngredients((prevIngredients) => {
      return [...prevIngredients, newIngredient];
    });
  }

  function toggleRecipeShown() {
    setIsRecipeShown((prevShown) => !prevShown);
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
        <IngredientsList
          ingredients={ingredients}
          toggleRecipeShown={toggleRecipeShown}
        />
      )}
      {isRecipeShown && <Recipe />}
    </main>
  );
}

export default IngredientsMain;
