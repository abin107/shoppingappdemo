import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import Thumb                from './../../Thumb';
import util                 from '../../../common/utils';

class CartProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    removeProduct: PropTypes.func.isRequired
  };

  state = {
    isMouseOver: false
  };

  handleMouseOver = () => {
    this.setState({ isMouseOver: true });
  };

  handleMouseOut = () => {
    this.setState({ isMouseOver: false });
  };

  render() {
    const { product, removeProduct } = this.props;

    const classes = ['landing-item'];

    if (!!this.state.isMouseOver) {
      classes.push('landing-item--mouseover');
    }

    return (
      <div className={classes.join(' ')}>
        <div
          className="landing-item__del"
          onMouseOver={() => this.handleMouseOver()}
          onMouseOut={() => this.handleMouseOut()}
          onClick={() => removeProduct(product)}
        />
        <Thumb
          classes="landing-item__thumb"
          src={require(`../../../assets/products/shirtsemi_2.jpg`)}
          alt={product.title}
        />
        <div className="landing-item__details">
          <p className="title">{product.title}</p>
          <p className="desc">
            {`${product.availableSizes[0]} | ${product.style}`} <br />
            Quantity: {product.quantity}
          </p>
        </div>
        <div className="landing-item__price">
          <p>{`${product.currencyFormat}  ${util.formatPrice(
            product.price
          )}`}</p>
        </div>
        <div className="tempSpacingComp" />

      </div>
    );
  }
}

export default CartProduct;
