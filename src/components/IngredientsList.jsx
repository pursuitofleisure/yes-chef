function IngredientsList({ ingredients, getRecipe, isLoading }) {
  const ingredientsListItems = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  return (
    <section className="ingredients-main" aria-labelledby="ingredients-header">
      <h2 id="ingredients-header">Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>
      {ingredients.length >= 4 && (
        <div className="recipe-cta">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button
            className="btn"
            onClick={getRecipe}
            disabled={isLoading ? true : false}
          >
            Get a Recipe
          </button>
        </div>
      )}
    </section>
  );
}

export default IngredientsList;
