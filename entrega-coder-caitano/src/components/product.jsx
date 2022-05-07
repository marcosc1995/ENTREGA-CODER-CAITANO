const Product = (props) => {
  return (
    <div className="product-card">
      <h2>{props.title}</h2>
      <img src={props.img} />
      <h2>${props.price}</h2>
      <p>{props.description}</p>
      <button>+</button>
    </div>
  );
};

export default Product;
