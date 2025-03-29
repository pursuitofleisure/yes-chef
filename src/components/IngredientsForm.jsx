import React from 'react';

function IngredientsForm() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => {
    return <li>{ingredient}</li>;
  });

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');
    setIngredients((prevIngredients) => {
      return [...prevIngredients, newIngredient];
    });
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
        <section aria-labelledby="ingredients-header">
          <h2 id="ingredients-header">Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsListItems}
          </ul>
          {ingredients.length >= 4 && (
            <div className="recipe-results">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button>Get a recipe</button>
            </div>
          )}
        </section>
      )}
    </main>
  );
}

export default IngredientsForm;
