import imgChart from "./carrito-de-compras.png";

const CartWidget = (props) => {
  return (
    <button className="m-1">
      <img src={imgChart} alt="" />{props.total}
    </button>
  );
};

export default CartWidget;
