import { useState } from "react";
import "../css/App.css";
import Header from "./Header";
import Search from "./Search";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [recipeId, setRecipeId] = useState("");
  const [recipe, setRecipe] = useState({});

  return (
    <>
      <Header />
      <main className="mainCont">
        <div>
          <Search
            searchResult={searchResult}
            setSearchResult={setSearchResult}
            setRecipe={setRecipe}
          />
          <RecipeList searchResult={searchResult} setRecipeId={setRecipeId} />
        </div>
        <div>
          <RecipeDetails
            recipeId={recipeId}
            recipe={recipe}
            setRecipe={setRecipe}
          />
        </div>
      </main>
    </>
  );
}

export default App;
