import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({ data }) => {
  // const [test, settest] = useState(data);
  // setTimeout(function () {
  //   console.log(test);
  // }, 2000);

  return (
    <div className="row">
      <div className="col">
        <img className="img-thumbnail" src={data.img} alt="" />
        <ItemCount stock={data.length} initial={1}></ItemCount>
      </div>
      <div className="col">
        <h2>{data.length}</h2>
        <p>{data.description}</p>
        <h2>U$D {data.price}</h2>
        <h6>Stock {data.stock}</h6>
        <p>{data.category}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
