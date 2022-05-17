import Item from "./Item";


const ItemList = ({items}) => {
  return (
    <div className="d-flex justify-content-evenly flex-wrap">
      {items.map((value) => (
        <Item key={value.id} title={value.name} price={value.price} img={value.img}></Item>
      ))}
    </div>
  );
};

export default ItemList;
