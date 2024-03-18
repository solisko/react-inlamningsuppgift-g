import styles from "../css/recipecard.module.css";


export default function RecipeCard({ meal }) {
  return (
    <div className={styles.recipeCard} >
      <img className={styles.image} src={meal.strMealThumb} alt="" />
      <h2>{meal.strMeal}</h2>
      <button>View recipe</button>
    </div>
  );
}
