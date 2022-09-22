import { React, useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleClick = () => {
    setIsInCart(!isInCart);
  };

  return (
    <div>
      <li className={isInCart ? "in-cart" : ""}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button onClick={handleClick} className="add">
          {isInCart ? "Remove from cart" : "Add to Cart"}
        </button>
      </li>

      {/* {isInCart ? (
        <li className="in-cart">
          <span>{name}</span>
          <span className="category">{category}</span>
          <button onClick={handleClick} className="add">
            Add to Cart
          </button>
        </li>
      ) : (
        <li className="">
          <span>{name}</span>
          <span className="category">{category}</span>
          <button onClick={handleClick} className="add">
            Add to Cart
          </button>
        </li>
      )} */}
    </div>
  );
}

export default Item;
