import { useState } from "react";
import "../css/App.css";
import Header from "./Header";
import Search from "./Search";
import List from "./List";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <>
      <Header />
      <Search searchResult={searchResult} setSearchResult={setSearchResult} />
      <List  searchResult={searchResult}/>
    </>
  );
}

export default App;
