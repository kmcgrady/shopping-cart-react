import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      items: [{
        imageUrl: 'http://placecorgi.com/250/250',
        name: 'CORGIS!',
        description: 'Corgis are cute',
        price: 99.99
      }, {
        imageUrl: 'http://fillmurray.com/250/250',
        name: 'Bill Murray!',
        description: 'I am Bill from Space Jam.',
        price: 9.99
      }, {
        imageUrl: 'http://lorempixel.com/250/250',
        name: 'Mystery Box',
        description: '????????',
        price: 59.99
      }, {
        imageUrl: 'http://placecorgi.com/250/250?cb=13',
        name: 'Kittens!',
        description: 'Kittens are sometimes cute',
        price: 19.99
      }, {
        imageUrl: 'http://placebear.com/250/250',
        name: 'CORGIS!',
        description: 'Corgis are cute',
        price: 99.99
      }, {
        imageUrl: 'http://baconmockup.com/250/250',
        name: 'BACON!',
        description: 'Bacon is delish!',
        price: 19.99
      }]
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(item) {
    this.setState({
      cart: this.state.cart.concat(item)
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <ProductList items={this.state.items} handleAddToCart={this.handleAddToCart} />
            <Cart cart={this.state.cart} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
