import React from 'react';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';
import productsData from '../productsData';
//import shoppingCart from '../shoppingCart';

const FoodMenu = () => {
    const cartItems = [productsData[0]];
    return(
        <div className="container">
            <div className="row">
              <div className="col-8">
                <Product products={productsData}/>
              </div>            
              <div className="col-4">
                <ShoppingCart data={cartItems}/>
              </div>        
            </div>            
        </div>
    );
}

export default FoodMenu;