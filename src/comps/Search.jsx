import { useState, useRef, useEffect } from "react";
import styles from "../css/search.module.css";

export default function Search({ searchResult, setSearchResult }) {
  const [input, setinput] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSearchResult(data.meals);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [input]);

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
    </div>
  );
}
