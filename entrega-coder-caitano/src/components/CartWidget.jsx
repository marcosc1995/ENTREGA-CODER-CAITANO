import imgChart from "../img/carrito-de-compras.png";

const CartWidget = (props) => {
  return (
    <button>
      <img src={imgChart} alt="" />{props.total}
    </button>
  );
};

export default CartWidget;
