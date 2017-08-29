import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.handleAddToCart(this.props);
  }

  render() {
    const { imageUrl, name, description, price } = this.props;

    return (
      <div className="col col-xs-12 col-md-6 col-lg-4">
        <div>
          <img src={imageUrl} alt={name} />
        </div>
        <h2>{this.props.children}</h2>
        <p>{description}</p>
        <p>${price}</p>
        <div className="btn btn-primary btn-lg" onClick={this.handleClick}>Add to Cart</div>
      </div>
    );
  }
}

export default Product;
