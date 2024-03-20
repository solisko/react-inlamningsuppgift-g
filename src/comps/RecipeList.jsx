import RecipeItem from "./RecipeItem";

export default function RecipeList({ searchResult, setRecipeId }) {
  return (
    <div>
      {searchResult.map((recipe) => (
        <RecipeItem key={recipe.idMeal} recipe={recipe} setRecipeId={setRecipeId} />
      ))}
    </div>
  );
}
