import React from 'react';
import productsData from './productsData'
import Product from './components/Product'
import ShoppingCart from './components/ShoppingCart'

const App = () => {
  const products = productsData.map((product, idx) =>
  <Product dato={product} key={idx} />);
  return (  
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
          {products}
          </div>
          <div class="col">
          <ShoppingCart items={products}/>      
          </div>
        </div>
    </div>
  </div>      
  );
          
}


export default App;