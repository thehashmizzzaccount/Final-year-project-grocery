import React from "react";
import ImageHelper from "../helper/ImageHelper";
import { addItemToCart } from "../helper/CartHelper";

const Card = ({ product }) => {
  const addToCart = () => {
    addItemToCart(product, () => {});
  };

  return (
    <div className="card text-white bg-dark border-success mb-3">
      <ImageHelper
        productId={product._id}
        className="rounded card-img-top card-img"
      />
      <div className="card-body card-size" >
        <h5 className="card-title text-capitalize">{product.name}</h5>
        <p class="card-text text-capitalize font-weight-light">
          {product.description}
        </p>
        <button href="#" className="btn btn-success" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
