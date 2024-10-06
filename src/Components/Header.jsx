import { useState } from "react";

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
function Cart() {
  return (
    <div className="cart">
      <div className="realCart">
        <img src="./images/icon-cart.svg" alt="cart-icon" />
      </div>
      <div className="image">
        <img src="./images/image-avatar.png" alt="avatar-image" />
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <div className="motherHeader">
      <Navs />
      <Cart />
    </div>
  );
};
export default Header;
