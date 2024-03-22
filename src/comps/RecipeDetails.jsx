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
      <div className={styles.nameImage}>
        <h1>{recipe.strMeal}</h1>
        <img
          className={styles.image}
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
      </div>

      <section className={styles.categories}>
        <p>Category: {recipe.strCategory}</p>
        <p>Area: {recipe.strArea}</p>
        <br />
      </section>

      <section className={styles.ingredients}>
        <h3>Ingredients</h3>
        <table>
          {/* <tr>
            <th>Measur</th>
            <th>
            </th>
          </tr> */}
          {Object.keys(recipe)
            .filter((key) => key.startsWith("strIngredient") && recipe[key])
            .map((key, index) => (
              <tr>
                <td key={index}>{recipe[`strMeasure${index + 1}`]}</td>
                <td>{recipe[key]}</td>
              </tr>
            ))}
        </table>
        <ul></ul>
      </section>

      <br />
      <section className={styles.instructions}>
        <h3>Instructions</h3>
        <p>
          YouTube: <a href={recipe.strYoutube}>{recipe.strYoutube}</a>
        </p>
        <br />
        <p>{recipe.strInstructions}</p>
        <br />
      </section>

      <section className={styles.tags}>
        <p>Tags: {recipe.strTags}</p>
      </section>
    </div>
  );
}
