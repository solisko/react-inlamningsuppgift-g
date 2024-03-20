import styles from "../css/recipeitem.module.css";

export default function RecipeItem({ recipe, setRecipeId }) {
  return (
    <div className={styles.recipeCard}>
      <section className={styles.imgSection}>
        <img className={styles.image} src={recipe.strMealThumb} alt="" />
        <h2>{recipe.strMeal}</h2>
      </section>
      <section className={styles.btnSection}>
        <button
          onClick={() => {
            setRecipeId(recipe.idMeal);
          }}
          className={styles.viewBtn}
        >
          View recipe
        </button>
        <p>Rating</p>
      </section>
    </div>
  );
}
