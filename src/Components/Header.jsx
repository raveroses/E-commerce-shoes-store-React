// import { useState } from "react";
import ImageDisplay from "./ImageDisplay";
import image from "./SmallImageArray";
import { useState } from "react";
import bigiImage from "./BigiImageArray";
import { MdDelete } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const Header = () => {
  const [images, setImages] = useState("/images/image-product-1.jpg");
  const [number, setNumber] = useState(null);
  const [increase, setIncrease] = useState(0);
  const [deletes, setDeletes] = useState(true);
  const [cart, setCart] = useState(false);
  const [cancel, setCancel] = useState(false);

  const handleCart = () => {
    if (increase > 0) {
      setCart((c) => !c);
    }
  };

  const handleIncrease = () => {
    setIncrease((prev) => prev + 1);
  };
  const handleIDecrease = () => {
    if (increase > 0) {
      setIncrease((prev) => prev - 1);
    }
  };
  const handleDelete = () => {
    setDeletes((del) => !del);
    setIncrease(0);
  };
  const handleImageChange = (id) => {
    const bigImage = bigiImage.map((item) => {
      if (item.id === id) {
        setImages(item.image);
        setNumber(item.id);
      }
    });
    return bigImage;
  };
  const handleCheckOut = () => {
    setCancel((prev) => !prev);
  };
  const handleCancel = () => {
    setCancel(false);
  };
  return (
    <>
      <div className="motherHeader">
        <Navs />

        <Cart increase={increase} />
      </div>
      <div
        className="price-calculation"
        style={{
          display: !cart ? "none" : "block",
        }}
      >
        <h5>Cart</h5>
        <hr />

        <div
          className="empty"
          style={{ display: increase === 0 ? "block" : "none" }}
        >
          {" "}
          <p>Your cart is empty</p>
        </div>
        {/* <div style={{ display: deletes ? "none" : "block" }}> */}
        <div style={{ display: increase > 0 ? "block" : "none" }}>
          <div className="goods-detail">
            <div className="thumbnail">
              <img src={images} alt="thumb-image" />
            </div>
            <div className="deet-name">
              <h6>Fall Limited Edition Sneakers</h6>
              <span className="pri">
                $125.00 X {increase}{" "}
                <span className="total"> ${(125 * increase).toFixed(2)}</span>
              </span>
            </div>
            <div className="delete" onClick={handleDelete}>
              <MdDelete className="ikon" />
            </div>
          </div>
          <div className="checkOut" onClick={handleCheckOut}>
            Checkout
          </div>
        </div>
      </div>
      <ImageDisplay
        handleIDecrease={handleIDecrease}
        handleImageChange={handleImageChange}
        handleIncrease={handleIncrease}
        images={images}
        number={number}
        increase={increase}
        image={image}
        handleCart={handleCart}
      />
      <Modal cancel={cancel} handleCancel={handleCancel} />
      <div
        className="overlay"
        style={{ display: cancel ? "block" : "none" }}
      ></div>
    </>
  );
};

function LogoName() {
  return <div className="logoName">Titilope Sneakers</div>;
}

function Navs() {
  const mouse0ver = (e) => {
    e.target.style.paddingBottom = "40px";
    e.target.style.borderBottom = "2px solid hsl(26, 100%, 55%)";
  };
  const mouse0ut = (e) => {
    e.target.style.paddingBottom = "";
    e.target.style.borderBottom = "";
  };

  return (
    <div className="navs">
      <LogoName />
      <ul>
        <li>
          <a href="/" onMouseOver={mouse0ver} onMouseOut={mouse0ut}>
            Collections
          </a>
        </li>
        <li>
          <a href="/" onMouseOver={mouse0ver} onMouseOut={mouse0ut}>
            Men
          </a>
        </li>
        <li>
          <a href="/" onMouseOver={mouse0ver} onMouseOut={mouse0ut}>
            Women
          </a>
        </li>
        <li>
          <a href="/" onMouseOver={mouse0ver} onMouseOut={mouse0ut}>
            About
          </a>
        </li>
        <li>
          <a href="/" onMouseOver={mouse0ver} onMouseOut={mouse0ut}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
function Cart({ increase }) {
  return (
    <div className="cart">
      <div className="realCart">
        <img src="./images/icon-cart.svg" alt="cart-icon" />
      </div>
      <div className="image">
        <img src="./images/image-avatar.png" alt="avatar-image" />
      </div>
      <div className="cart-number">{increase}</div>
    </div>
  );
}

function Modal({ cancel, handleCancel }) {
  const [imageDis, setImageDis] = useState("/images/image-product-4.jpg");
  const [control, setControl] = useState(0);

  const big = bigiImage[control];

  const handleRightCaret = () => {
    if (control < bigiImage.length - 1) {
      setControl((prev) => prev + 1);
      setImageDis(big.image);
    } else {
      setControl(0);
    }
  };

  const handleLeftCaret = () => {
    if (control > 0) {
      setControl((prev) => prev - 1);
      setImageDis(big.image);
    } else {
      setControl(bigiImage.length - 1);
    }
  };
  // console.log(big);

  // const bigImage = bigiImage[control].map((item) => item.image);
  // console.log(bigImage);

  const small = image.map((item) => (
    <div
      className="smallImage"
      key={item.id}
      style={
        item.id === control
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
  ));

  return (
    <div className="modal" style={{ display: cancel ? "block" : "none" }}>
      <div className="cancels" onClick={handleCancel}>
        <FaTimes className="ikon" />
      </div>
      <div
        className="bigiImage"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div className="leftCaret" onClick={handleLeftCaret}>
          <FaChevronLeft />
        </div>
        <img src={imageDis} alt="big-image" />
        <div className="rightCaret" onClick={handleRightCaret}>
          <FaChevronRight />
        </div>
      </div>

      <div className="smallFlex">{small}</div>
    </div>
  );
}

export default Header;
