import React, { Component } from 'react';
import Product from './Product'

class ProductList extends Component {
  render() {
    const { items, handleAddToCart } = this.props;

    return (
      <div className="col col-sm-9">
        <h1>Products</h1>
        <div className="row">
          {items.map((it, index) => {
            return <Product key={index} {...it} handleAddToCart={handleAddToCart}>{it.name}</Product>;
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
