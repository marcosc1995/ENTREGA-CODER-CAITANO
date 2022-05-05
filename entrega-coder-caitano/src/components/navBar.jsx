import CartWidget from "./CartWidget";



const NavBar = (props) => {
  return (
    <nav>
      <h1>E-ShopTech</h1>
      <ul>
        <li>
          <a href="">Categorias </a>
        </li>
        <li>
          <a href="">Sobre Nosotros</a>
        </li>
      </ul>
      <CartWidget></CartWidget>
    </nav>
  );
};

export default NavBar;
