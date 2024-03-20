import { useEffect, useState } from "react";

export default function RecipeDetails({ recipeId }) {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function fetchMeal() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
      );
      const data = await res.json();
      setRecipe(data.meals[0]);
    }
    fetchMeal();
  }, [recipeId]);

  return (
    <div>
      <div>
        <h1>{recipe.strMeal}</h1>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>
    </div>
  );
}
