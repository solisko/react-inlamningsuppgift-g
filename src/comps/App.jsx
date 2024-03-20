import { useState } from "react";
import "../css/App.css";
import Header from "./Header";
import Search from "./Search";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import Container from "./Container";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [recipeId, setRecipeId] = useState("");
  const [recipe, setRecipe] = useState({});

  return (
    <>
      <main className="mainCont">
        <Header />
        <Search searchResult={searchResult} setSearchResult={setSearchResult} setRecipe={setRecipe}/>
        <Container>
          <RecipeList searchResult={searchResult} setRecipeId={setRecipeId} />
          <RecipeDetails recipeId={recipeId} recipe={recipe} setRecipe={setRecipe} />
        </Container>
      </main>
    </>
  );
}

export default App;
