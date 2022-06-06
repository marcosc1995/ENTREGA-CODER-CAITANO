import ItemCount from "../ItemCount/ItemCount";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { useEffect, useState } from "react";
import "./Item.css";

const Item = ({ data }) => {
  // const [showDetails, setShowDetails] = useState(false);
  // const show = () => {
  //   setShowDetails(!showDetails);
  // };
  // const showDetails = ()=>{
  //   setDetails('d-block')
  // }
  //eliminar el item count del component item y dejarlo funcionando en el item detail
  return (
    <div className="test-card card  bg-white m-1 d-flex">
      <div className="d-flex flex-column  justify-content-between">
        <img className="img-fluid w-75 card-img-top" src={data.img} />
        <div>
          <h2 className="text-secondary m-1 fs-6">{data.name}</h2>
          <h2 className="text-end text-secondary m-1">${data.price}</h2>
        </div>
      </div>
      <ItemCount stock={data.stock} initial={1}></ItemCount>
    </div>
  );
};

export default Item;
