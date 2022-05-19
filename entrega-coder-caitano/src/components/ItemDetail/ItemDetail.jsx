const ItemDetail = ({data}) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <img className="img-thumbnail w-25" src={data.img} alt="" />
      <p>
        {data.description}
      </p>
    </div>
  );
};

export default ItemDetail 