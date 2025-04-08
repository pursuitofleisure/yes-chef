import Markdown from 'react-markdown';

function Recipe({ recipe }) {
  return (
    <section
      className="recipe-results"
      aria-labelledby="heading-recommended-recipe"
      aria-live="polite"
    >
      <h2 id="heading-recommended-recipe">Recommended Recipe: </h2>
      <Markdown>{recipe}</Markdown>
    </section>
  );
}

export default Recipe;
