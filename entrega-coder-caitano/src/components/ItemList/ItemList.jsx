import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div className="d-flex  justify-content-evenly flex-wrap">
      {items.map((value) => (
        <div key={value.id}>
          <Link to={`/details/${value.id}`}>
            <Item              
              title={value.name}
              price={value.price}
              img={value.img}
            ></Item>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
