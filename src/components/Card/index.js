const Card = (props) => {
  return (
    <>
      <div className="card product-item">
        <img
          className="product-img"
          // src="https://images-platform.99static.com//7VDQLeaeWN0pK5kN2Zvy09IAs_U=/133x180:1066x1113/fit-in/500x500/99designs-contests-attachments/114/114421/attachment_114421549"
          src={props.image}
          alt=""
        />
        <p>{props.title}</p>
        <h4>{props.price}</h4>
      </div>
    </>
  );
};

export default Card;
