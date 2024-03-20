import styles from "../css/recipedetails.module.css";
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
    <div className={styles.recipeCard} >
      <div>
        <h1>{recipe.strMeal}</h1>
        <img className={styles.image} src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>
    </div>
  );
}
