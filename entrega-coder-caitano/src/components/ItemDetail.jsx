const ItemDetail = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img className="img-thumbnail w-25" src={props.img} alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        dolorum tenetur, cupiditate exercitationem, debitis veritatis aliquam
        saepe minima quos mollitia similique, sequi dolor laborum iusto
        necessitatibus sapiente quis aut sint!
      </p>
    </div>
  );
};

export default ItemDetail 