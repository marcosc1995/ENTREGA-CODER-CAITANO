import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div className="d-flex  justify-content-evenly flex-wrap">
      {items.map((value) => (
        <div key={value.id} className= 'card'>
          <Item data={value}></Item>

          <Link to={`/details/${value.id}`}>
            <div className="btn-primary btn w-100">Ver detalles</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
