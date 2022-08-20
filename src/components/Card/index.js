import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <>
            <Link to={'/detail'}>
                <div className="card product-item">
                    <img className="product-img" src={props.image} alt="" />
                    <p>{props.title}</p>
                    <h4>{props.price}</h4>
                </div>
            </Link>
        </>
    );
};

export default Card;
