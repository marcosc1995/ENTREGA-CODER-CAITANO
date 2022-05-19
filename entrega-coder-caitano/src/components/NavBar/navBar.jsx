import CartWidget from "../CartWidget/CartWidget";
import {Link} from 'react-router-dom'


const NavBar = (props) => {
  return (
    <nav>
      <h1>E-ShopTech</h1>
      <ul>
        <Link to='/'>
          Lista de Porductos
        </Link>
        {/* <Link>
          Sobre Nosotros
        </Link> */}
      </ul>
      <CartWidget total={props.totalCart}></CartWidget>
    </nav>
  );
};

export default NavBar;
