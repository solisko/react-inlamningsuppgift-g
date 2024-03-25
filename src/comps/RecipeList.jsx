import styles from "../css/recipelist.module.css";

export default function RecipeList({ searchResult, setRecipeId, ratingsComp }) {
  const RatingsComp = ratingsComp;
  console.log(searchResult)

  return (
    <div>
      {searchResult.map((recipe) => (
        <div key={recipe.idMeal} className={styles.recipeCard}>
          <section className={styles.imgSection}>
            <img className={styles.image} src={recipe.strMealThumb} alt="" />
          </section>
          <div className={styles.textSection} >
            <h2>{recipe.strMeal}</h2>
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
              <section className={styles.ratingSection}>
                <p>Rating: </p>
                <RatingsComp />
                {/* <RatingsComp rating={recipe.rating} /> */}
              </section>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}
