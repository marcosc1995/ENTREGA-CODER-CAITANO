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
      <button>
        <img src={props.img} alt="" />
      </button>
    </nav>
  );
};

export default NavBar;
