import React from "react";
import AllProducts from "./AllProducts";
import AddToCart from "./AddToCart";

const Toggle = ({ handleActiveState, isActive, handleSelectedPr, selected, onDelete={onDelete} }) => {
  return (
    <div>
      <div className="flex justify-center mt-14">
        <button
          onClick={() => handleActiveState("cart")}
          className={`${
            isActive.state == "cart"
              ? "btn btn-primary border px-10 border-red-500 mr-7"
              : "btn border border-red-500 px-10 mr-7"
          }`}
        >
          Cart
        </button>
        <button
          onClick={() => handleActiveState("about")}
          className={`${
            isActive.state == "about"
              ? "btn btn-primary border px-10 border-red-500 mr-7"
              : "btn border border-red-500 px-10 mr-7"
          }`}
        >
          About
        </button>
      </div>

      <div className="mt-24">{isActive.cart ? <AllProducts handleSelectedPr={handleSelectedPr} /> : <AddToCart selected={selected} onDelete={onDelete}/>}</div>
    </div>
  );
};

export default Toggle;
