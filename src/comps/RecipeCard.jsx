export default function RecipeCard({ meal }) {
  return (
    <div>
      <img src={meal.strMealThumb} alt="" />
      <h1>{meal.strMeal}</h1>
      <button>View recipe</button>
    </div>
  );
}
