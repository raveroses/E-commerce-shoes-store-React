import { useState } from "react";
// import image from "./SmallImageArray";
// import bigiImage from "./BigiImageArray";

export default function ImageDisplay({
  handleIDecrease,
  handleImageChange,
  handleIncrease,
  images,
  number,
  increase,
  image,
  handleCart,
}) {
  return (
    <div className="cover">
      <div className="image-container">
        <div className="bigiImage">
          <img src={images} alt="big-image" />
        </div>
        <div className="smallFlex">
          {image.map((item) => (
            <div
              className="smallImage"
              key={item.id}
              onClick={() => handleImageChange(item.id)}
              style={
                number === item.id
                  ? {
                      border: "1px solid red",
                      opacity: "0.5",
                      backgroundColor: "hsl(26, 100%, 55%)",
                      borderRadius: "5px",
                    }
                  : {}
              }
            >
              <img src={item.image} alt="product-image" />
            </div>
          ))}
        </div>
      </div>

      <div className="written-palace">
        <h5>Titilope Sneakers</h5>
        <h2>Fall Limited Edition Sneakers </h2>

        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="priceFlex">
          <div className="actual-price"> $125.00</div>
          <div className="percentage">50%</div>
        </div>
        <div className="cancel">$250.00</div>

        <div className="buttons">
          <div className="quantity-button">
            {" "}
            <div className="minus" onClick={handleIDecrease}>
              <img src="/images/icon-minus.svg" alt="minus" />
            </div>
            <div className="num">{increase}</div>
            <div className="plus" onClick={handleIncrease}>
              <img src="/images/icon-plus.svg" alt="plus" />
            </div>
          </div>
          <div className="add-cart" onClick={handleCart}>
            <img src="/images/icon-cart.svg" alt="cart" />
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
}
