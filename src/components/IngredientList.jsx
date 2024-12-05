// src/components/IngredientList.jsx
import React from "react";

const IngredientList = ({ ingredients, addToStack }) => {
    return (
      <ul>
        {ingredients.map((ingredient, index) => (
            <li key={index} style={{
                backgroundColor: ingredient.color
            }}>
                {ingredient.name}
                <button onClick={() => addToStack(ingredient)}>+</button>
            </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;
  