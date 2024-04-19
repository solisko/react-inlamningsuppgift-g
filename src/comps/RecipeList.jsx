import styles from "../css/recipelist.module.css";

export default function RecipeList({
  searchResult,
  setRecipeId,
  ratingsComp,
  isOverlayOpen,
  setIsOverlayOpen,
}) {
  const RatingsComp = ratingsComp;

  return (
    <div className={styles.recipeList}>
      {searchResult.map((recipe, index) => (
        <div key={index} className={styles.recipeCard}>
          <section className={styles.imgSection}>
            <img className={styles.image} src={recipe.strMealThumb} alt="" />
          </section>
          <div className={styles.textSection}>
            <h2>{recipe.strMeal}</h2>
            <section className={styles.btnSection}>
              <button
                onClick={() => {
                  setRecipeId(recipe.idMeal);
                  setIsOverlayOpen(!isOverlayOpen);
                }}
                className={styles.viewBtn}
              >
                View recipe
              </button>
              <section className={styles.ratingSection}>
                <p>Rating: </p>
                <RatingsComp />
              </section>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}
