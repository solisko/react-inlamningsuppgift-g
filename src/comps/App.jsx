import { useState } from "react";
import "../css/App.css";
import Header from "./Header";
import Search from "./Search";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import Ratings from "./Ratings";
import FetchRecipes from "./FetchRecipes";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [recipeId, setRecipeId] = useState("");
  const [recipe, setRecipe] = useState({});
  const [favorites, setFavorites] = useState([]);
  const fetchedAll = FetchRecipes();

  const toggleFavorites = (recipeId) => {
    if (favorites.includes(recipeId)) {
      setFavorites(favorites.filter((id) => id !== recipeId));
    } else {
      setFavorites([...favorites, recipeId]);
    }
  };

  return (
    <>
      <Header />
      <main className="mainCont">
        <div className="searchCont">
          <Search
            searchResult={searchResult}
            setSearchResult={setSearchResult}
            setRecipe={setRecipe}
          />
        </div>
        <div>
          <RecipeDetails
            recipeId={recipeId}
            recipe={recipe}
            setRecipe={setRecipe}
            toggleFavorites={toggleFavorites}
            isFavorite={favorites.includes(recipeId)}
          />
        </div>
        <div className="listCont">
          <RecipeList
            data={fetchedAll}
            setRecipeId={setRecipeId}
            ratingsComp={Ratings}
          />
          <RecipeList
            data={searchResult}
            setRecipeId={setRecipeId}
            ratingsComp={Ratings}
          />
        </div>
      </main>
    </>
  );
}

export default App;
