import React      from 'react';
import PropTypes  from 'prop-types';
import Thumb      from '../Thumb';
import util       from '../../common/utils';

const Product = props => {
  const product = props.product;

  product.quantity = 1;

  let formattedPrice = util.formatPrice(product.price, product.currencyId);

  return (
    <div
      className="landing-item"
      onClick={() => props.addProduct(product)}
      data-sku={product.sku}
    >
      {product.isFreeShipping && (
        <div className="landing-stopper">Free shipping</div>
      )}
      <Thumb
        classes="landing-item__thumb"
        src={require(`../../assets/products/shirtsemi_1.jpg`)}
        alt={product.title}
      />
      <p className="landing-item__title">{product.title}</p>
      <div className="landing-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        </div>
      </div>
      <div className="landing-item__buy-btn">Add to cart</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default Product;
