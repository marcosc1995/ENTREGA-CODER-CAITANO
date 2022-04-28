const Product = (props) => {
  return (
    <div className="product-card">
      <h2>{props.title}</h2>
      <img src={props.img} />
      <p>{props.description}</p>
      <button>+</button>
    </div>
  );
};

export default Product;
