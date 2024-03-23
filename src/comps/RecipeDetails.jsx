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
      <div className={styles.textSection}>
        <div className={styles.catAndIng}>
          <section className={styles.ingredientSec}>
            <h2>Ingredients</h2>
            <table className={styles.table}>
              <tbody>
                {Object.keys(recipe)
                  .filter(
                    (key) => key.startsWith("strIngredient") && recipe[key]
                  )
                  .map((key, index) => (
                    <tr key={index}>
                      <td>{recipe[`strMeasure${index + 1}`]}</td>
                      <td>
                        <strong>{recipe[key]}</strong>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </section>
          <section className={styles.categories}>
            <p>
              Category: <strong>{recipe.strCategory}</strong>
            </p>
            <p>
              Area: <strong>{recipe.strArea}</strong>
            </p>
            <br />
          </section>
        </div>

        <section className={styles.instructions}>
          <h2>Instructions</h2>
          <p>
            YouTube: <a href={recipe.strYoutube}>{recipe.strYoutube}</a>
          </p>
          <br />
          <p>{recipe.strInstructions}</p>
          <br />
        </section>

        <section className={styles.tags}>
          <p>
            Tags:{" "}
            <strong>
              {recipe.strTags
                ? recipe.strTags.trim().split(",").join(", ")
                : ""}
            </strong>
          </p>
        </section>
      </div>
    </div>
  );
}
