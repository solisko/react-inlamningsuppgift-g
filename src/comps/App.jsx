import { useState } from "react";
import "../css/App.css";
import Header from "./Header";
import Search from "./Search";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import Ratings from "./Ratings";
import Overlay from "./Overlay";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [recipeId, setRecipeId] = useState("");
  const [recipe, setRecipe] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

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
          <Overlay
            isOpen={isOverlayOpen}
            onClose={() => setIsOverlayOpen(!isOverlayOpen)}
          >
            <RecipeDetails
              recipeId={recipeId}
              recipe={recipe}
              setRecipe={setRecipe}
              toggleFavorites={toggleFavorites}
              isFavorite={favorites.includes(recipeId)}
            />
          </Overlay>
        <div className="listCont">
          <RecipeList
            searchResult={searchResult}
            setRecipeId={setRecipeId}
            ratingsComp={Ratings}
            isOverlayOpen={isOverlayOpen}
            setIsOverlayOpen={setIsOverlayOpen}
          />
        </div>
      </main>
    </>
  );
}

export default App;
