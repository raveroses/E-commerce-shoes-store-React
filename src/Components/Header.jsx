function LogoName() {
  return <div className="logoName">Titilope Sneakers</div>;
}

function Navs() {
  return (
    <div className="navs">
      <LogoName />
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
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
