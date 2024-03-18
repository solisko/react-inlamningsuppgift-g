import Recipe from "./RecipeCard";

export default function List({ searchResult }) {
  return (
    <div>
      {searchResult.map((meal) => (
        <Recipe key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}
