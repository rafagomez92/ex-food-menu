import React, {Component} from 'react';
import ShoppingCart from './ShoppingCart';
import productsData from '../productsData';
import Menu from './Menu';


class FoodMenu extends Component {
  constructor() {
    super();
    this.state = {
        products: productsData
    };
}
render() {
    // Lista de items de productos seleccionados para mandar a nuestro shopping cart 
    const cartItems = [productsData[0],productsData[1],productsData[2]];
    return(
        <>
        <div className="container">
            <div className="row">
              <div className="col-8">
                <Menu />
              </div>            
              <div className="col-4">
                {/* Enviamos a nuestro shoppingcart el array generado */}
                <ShoppingCart data={cartItems}/>
              </div>        
            </div>            
        </div>          
        </>
    );
    }
}
    

export default FoodMenu;