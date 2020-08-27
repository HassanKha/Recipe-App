import React from "react";
import style from "./Recipes.module.css";

const Recipe = ({ title, calories, image, ing }) => {
  return (
    <div className={style.recipee}>
      <h1>{title}</h1>
      <ol>
        {ing.map((e) => (
          <li>{e.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};
export default Recipe;
