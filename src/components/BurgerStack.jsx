// `src/components/BurgerStack.jsx`
import React from "react";

const BurgerStack = ({ stack, removeFromStack }) => {
    return (
      <ul>
        {stack.map((ingredient, index) => (
            <li key={index} style={{
                backgroundColor: ingredient.color
            }}>
                {ingredient.name}
                <button onClick={() => removeFromStack(index)}>X</button>
            </li>
        ))}
      </ul>
    );
  };
  
  export default BurgerStack;
  