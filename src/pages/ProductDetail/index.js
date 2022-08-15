import { Link } from 'react-router-dom';
import CardProduct from '../../components/Card';
import { images } from '../../assets';

const ProductDetail = () => {
  return (
    <>
      <div className="product-detail">
        <div className="product-detail-img">
          <img
            src="https://images-platform.99static.com//7VDQLeaeWN0pK5kN2Zvy09IAs_U=/133x180:1066x1113/fit-in/500x500/99designs-contests-attachments/114/114421/attachment_114421549"
            alt=""
          />
        </div>
        <div className="product-detail-desc">
          <h1>White Roasters Coffe - Regular Coffe</h1>
          <p className="product-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            quibusdam fugit. Minus esse aspernatur voluptatem vero doloremque
            velit, odit sequi, eius libero aliquam numquam facere!
          </p>
          <h4 className="product-price">$19.99</h4>
          <button className="btn-atc">
            <Link to="/cart">Add to cart</Link>
          </button>
        </div>
      </div>

      <div className="related-product">
        <h2>Related Product</h2>
        <div className="product-items">
          <CardProduct
            image={images['brazil-dark-ground.jpg']}
            title="Brazil Dark Ground"
            price="$19.99"
          />

          <CardProduct
            image={images['breakfast-medium-roast.jpg']}
            title="Breakfast Medium Roast"
            price="$19.99"
          />

          <CardProduct
            image={images['costarica-light-roast.jpg']}
            title="Costarica Light Roast"
            price="$19.99"
          />

          <CardProduct
            image={images['decaf-espresso.jpg']}
            title="Decaf Espresso"
            price="$19.99"
          />

          <CardProduct
            image={images['espresso-roast-blend.jpg']}
            title="Espresso Roast Blend"
            price="$19.99"
          />

          <CardProduct
            image={images['french-roast.jpg']}
            title="French Roast"
            price="$19.99"
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
