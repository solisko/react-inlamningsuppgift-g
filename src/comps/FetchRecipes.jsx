import { useEffect, useState } from "react";

export default function FetchRecipes() {
  const [fetchAll, setFetchAll] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.meals) {
          setFetchAll(data.meals);
        } else {
          setFetchAll([]);
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return fetchAll;
}
