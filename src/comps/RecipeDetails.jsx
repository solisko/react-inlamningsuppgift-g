import styles from "../css/recipedetails.module.css";
import { useEffect } from "react";

export default function RecipeDetails({ recipeId, recipe, setRecipe }) {

  useEffect(() => {
    async function fetchMeal() {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
        );
        const data = await res.json();

        if (data.meals && data.meals.length > 0) {
          setRecipe(data.meals[0]);
        } else {
          console.error("No meal found with ID:", recipeId);
        }
      } catch (error) {
        console.error("Error fetching meal:", error);
      }
    }
    fetchMeal();
  }, [recipeId]);

  if (!recipe || !recipe.strMeal) {
    return null;
  }

  return (
    <div className={styles.recipeCard}>
      <div>
        <h1>{recipe.strMeal}</h1>
        <img
          className={styles.image}
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
      </div>
      <section className={styles.instructions}>
        <p>{recipe.strInstructions}</p>
      </section>
    </div>
  );
}
