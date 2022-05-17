import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";
import { useEffect, useState } from "react";

const Item = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const show = () => {
    setShowDetails(!showDetails);
  };
  // const showDetails = ()=>{
  //   setDetails('d-block')
  // }

  return (
    <div onClick={show} className="w-25 bg-white m-1 d-flex">
      <div
        
        className="d-flex flex-column justify-content-between"
      >
        <img className="img-fluid card-img-top" src={props.img} />
        <div>
          <h2 className="text-secondary m-1 fs-6">{props.title}</h2>
          <h2 className="text-end text-secondary m-1">${props.price}</h2>
        </div>
        {/* <p>{props.description}</p> */}
        <ItemCount stock={5} initial={1}></ItemCount>
      </div>
      <div>
        {showDetails ? (
          <ItemDetailContainer
            title={props.title}
            img={props.img}
          ></ItemDetailContainer>
        ) : null}
      </div>
    </div>
  );
};

export default Item;
