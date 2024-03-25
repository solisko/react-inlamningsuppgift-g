import { useState, useRef, useEffect } from "react";
import styles from "../css/search.module.css";

export default function Search({ setRecipe, setSearchResult }) {
  const [input, setinput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const searchByMeal = fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });

    const searchByIngredient = fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });

    Promise.all([searchByMeal, searchByIngredient])
      .then(([mealResult, ingredientResult]) => {
        const meals = mealResult?.meals || [];
        const ingredients = ingredientResult?.meals || [];

        const combinedResults = [...meals, ...ingredients];

        const filterdResults = combinedResults.filter(
          (meal, index, self) =>
            index === self.findIndex((m) => m.idMeal === meal.idMeal)
        );

        if (filterdResults.length > 0) {
          // // hämta localStorage, lägg till för varje måltid en rating
          // const ratings = JSON.parse(localStorage.getItem('ratings'))
          // data.meals.forEach(meal => {
          //   meal.rating = ratings.filter(r => r.id === meal.id)
          // });
          setSearchResult(filterdResults);
          setErrorMsg("");
        } else {
          setSearchResult([]);
          setRecipe("");
          setErrorMsg(`No recipes match with ${input}`);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setErrorMsg("Error fetching data. Please try again later.");
      });
  }, [input, setSearchResult, setRecipe]);

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        value={input}
        ref={inputRef}
        onChange={() => setinput(inputRef.current.value)}
        type="text"
        placeholder="Search for a recipe..."
      />
      {errorMsg && <p className={styles.errorMsg}>{errorMsg}</p>}
    </div>
  );
}
