import styles from "../css/recipelist.module.css";

export default function RecipeList({ searchResult, setRecipeId, ratingsComp }) {
  const RatingsComp = ratingsComp;

  return (
    <div>
      {searchResult.map((recipe) => (
        <div key={recipe.idMeal} className={styles.recipeCard}>
          <section className={styles.imgSection}>
            <img className={styles.image} src={recipe.strMealThumb} alt="" />
            <h2>{recipe.strMeal}</h2>
          </section>
          <section className={styles.btnSection}>
            <button
              onClick={() => {
                setRecipeId(recipe.idMeal);
                window.scrollTo({ top: 200, behavior: "smooth" });
              }}
              className={styles.viewBtn}
            >
              View recipe
            </button>
            <RatingsComp />
          </section>
        </div>
      ))}
    </div>
  );
}
