import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ data }) => {
  return (
    <div className="row">
      <div className="col">
        <img className="img-thumbnail" src={data.img} alt="" />
        <ItemCount stock={data.stock} initial={1}></ItemCount>

      </div>
      <div className="col">
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <h2>U$D {data.price}</h2>
        <h6>Stock {data.stock}</h6>
        <p>{data.category}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
