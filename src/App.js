import React, { useEffect, useState } from "react";
import recipe from "./Recipes";
import "./App.css";
import Recipe from "./Recipes";

function App() {
  const ID = "a5060bba";
  const Key = "67925c09919740ee2d248b79f49c4107";
  const Req = `https://api.edamam.com/search?q=chicken&app_id=${ID}&app_key=${Key}&from=0&to=3&calories=591-722&health=alcohol-free`;

  const [recipe, setrecipe] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setquery] = useState("chicken");

  useEffect(() => {
    getrecipes();
  }, [query]);

  const getrecipes = async () => {
    const responce = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${Key}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    const Data = await responce.json();
    setrecipe(Data.hits);
    console.log(Data.hits);
  };

  const updatesearch = (e) => {
    setsearch(e.target.value);
  };
  const getsearch = (e) => {
    e.preventDefault();
    setquery(search);
    setsearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getsearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updatesearch}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recips">
        {recipe.map((r) => (
          <Recipe
            title={r.recipe.label}
            calories={r.recipe.calories}
            image={r.recipe.image}
            ing={r.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
