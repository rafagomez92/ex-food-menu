import React from 'react';

const ShoppingCart = (props) => {
    let cartItems = props.data.length;    

    // let total = sumTotal.reduce(function(a, b){return a + b});
    
    if(cartItems > 0) {
    cartItems = <p>Total de productos seleccionados {cartItems}</p> ;
    } else {
        cartItems = <p>No hay productos seleccionados</p>
    }
    return(
        
        <div className="card" style={{width: '18rem'}}>            
                <div className="card-body">
                <h5 className="card-title">Carrito de compras</h5>                
                <p class="card-text">{cartItems}</p>
                <p></p>                                                                                                                                                                                    
                </div>
        </div> 
    );
}

export default ShoppingCart;