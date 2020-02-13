import React, { Component } from 'react';
import productsData from '../productsData';
import Product from './Product';

class Menu extends Component {
    constructor() {
        super();
        this.state = {
        products: productsData
        }
    }

    render() {
        const product = this.state.products.map((producto, idx) =>
        <Product info={producto} key={idx} />);
        return (
          <>
            {product}
          </>
        );
      }

}

export default Menu;