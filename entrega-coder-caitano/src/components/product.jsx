import ItemCount from "./ItemCount";

const Product = (props) => {
  return (
    <div className="card w-25 m-1">
      <img className="img-fluid card-img-top" src={props.img} />
      <h2 className="text-secondary m-1 fs-6">{props.title}</h2>
      <h2 className="text-end text-secondary m-1">${props.price}</h2>
      {/* <p>{props.description}</p> */}
      <ItemCount stock={5} initial={1}></ItemCount>
    </div>
  );
};

export default Product;
