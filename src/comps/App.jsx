import { useState } from "react";
import "../css/App.css";
import Header from "./Header";
import Search from "./Search";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import Container from "./Container";
import ChildContainer from "./ChildContainer";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [recipeId, setRecipeId] = useState("");

  return (
    <>
      <Header />
      <Search searchResult={searchResult} setSearchResult={setSearchResult} />
      <Container>
        {/* <ChildContainer> */}
          <RecipeList searchResult={searchResult} setRecipeId={setRecipeId} />
        {/* </ChildContainer> */}
        {/* <ChildContainer> */}
          <RecipeDetails recipeId={recipeId} />
        {/* </ChildContainer> */}
      </Container>
    </>
  );
}

export default App;
