import { useState, useRef, useEffect } from "react";
import styles from "../css/search.module.css";

export default function Search({ setRecipe, setSearchResult }) {
  const [input, setInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef();

  const fetchData = async (searched) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searched}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.meals) {
        setSearchResult(data.meals);
        setErrorMsg("");
      } else {
        setRecipe("");
        setErrorMsg(`No recipes match with ${searched}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMsg("Error fetching data. Please try again later.");
    }
  };

  useEffect(() => {
    fetchData("");
  }, []);

  const handleSearch = () => {
    const searched = inputRef.current.value.trim();
    if (searched === "") {
      setErrorMsg("Please type in something to make a search.");
      return;
    }
    setInput(searched);
    fetchData(searched);
  };

  const handleReset = () => {
    setInput("");
    fetchData("")
    setErrorMsg("");
    inputRef.current.value = "";
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          value={input}
          ref={inputRef}
          onChange={() => setInput(inputRef.current.value)}
          type="text"
          placeholder="Search for a recipe..."
        />
        <button className={styles.searchBtn} onClick={handleSearch}>
          Search
        </button>
        <button className={styles.resetBtn} onClick={handleReset}>
          Reset
        </button>
      </div>
      <div>{errorMsg && <p className={styles.errorMsg}>{errorMsg}</p>}</div>
    </>
  );
}
