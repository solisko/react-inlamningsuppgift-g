import { useState, useRef, useEffect } from "react";
import styles from "../css/search.module.css";

export default function Search({ setRecipe, setSearchResult }) {
  const [input, setinput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef();

  // useEffect(() => {
  //   fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setSearchResult(data.meals);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setErrorMsg("Error fetching data. Please try again later.");
  //     });
  // }, [setSearchResult]);

  useEffect(() => {
    // if (input.trim() === "") {
    //   setErrorMsg("");
    //   return;
    // }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.meals) {
          setSearchResult(data.meals);
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
