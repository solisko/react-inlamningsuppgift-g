import styles from "../css/recipedetails.module.css";
import { useEffect } from "react";
import { FaHeart } from "react-icons/fa";

export default function RecipeDetails({
  recipeId,
  recipe,
  setRecipe,
  toggleFavorites,
  isFavorite,
}) {
  const handleFavoriteClick = () => {
    toggleFavorites(recipeId);
  };

  useEffect(() => {
    async function fetchMeal() {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
        );
        const data = await res.json();

        if (data.meals && data.meals.length > 0) {
          setRecipe(data.meals[0]);
          console.log(recipeId);
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
      <div className={styles.nameAndFavorite}>
        <h1>{recipe.strMeal}</h1>
        <section className={styles.heartSection}>
          <label>
            <input
              type="radio"
              name="favorite"
              value={isFavorite}
              onClick={handleFavoriteClick}
            />
            <FaHeart
              className={styles.heart}
              color={isFavorite ? "#ff0000" : "#333"}
              size={40}
            />
          </label>
        </section>
      </div>
      <div className={styles.imageAndIngredients}>
        <div className={styles.imgBox}>
          <img
            className={styles.image}
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
        </div>
        <section className={styles.ingredients}>
          <h2>Ingredients</h2>
          <table className={styles.table}>
            <tbody>
              {Object.keys(recipe)
                .filter((key) => key.startsWith("strIngredient") && recipe[key])
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
      </div>

      <div className={styles.instructions}>
        <h2>Instructions</h2>
        <p>
          YouTube: <a href={recipe.strYoutube} target="_blank">{recipe.strYoutube}</a>
        </p>
        <br />
        {recipe.strInstructions.split("\r\n").map((instr, idx) => (
          <p key={idx}>{instr}</p>
        ))}
      </div>

      <div className={styles.tagsAndCategories}>
        <section className={styles.tags}>
          <span>
            Tags:{" "}
            <strong>
              {recipe.strTags
                ? recipe.strTags.trim().split(",").join(", ")
                : ""}
            </strong>
          </span>
        </section>
        <section className={styles.categories}>
          <p>
            Category: <strong>{recipe.strCategory}</strong>
          </p>
          <p>
            Area: <strong>{recipe.strArea}</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
