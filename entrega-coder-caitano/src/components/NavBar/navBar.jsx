import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        <h1 className="text-dark">E-ShopTech</h1>
      </Link>
      <ul className="d-flex">
        <Link className="nav-item m-1 btn btn-primary bg-dark p-1" to='/category/informatica'>
          Informatica
        </Link>
        <Link className="nav-item m-1 btn btn-primary bg-dark p-1" to="/category/celulares">
          Celulares
        </Link>
        <Link className="nav-item m-1 btn btn-primary bg-dark p-1" to="/category/audio">
          Audio
        </Link>
      </ul>
      <CartWidget total={props.totalCart}></CartWidget>
    </nav>
  );
};

export default NavBar;
