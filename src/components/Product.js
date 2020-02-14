import React from 'react';

const Product = (props) => {    
    
    return(
        <div className="container mt-3">
            <div className="card" style={{width: '18rem'}}>
                <img src={props.info.img} className="card-img-top" alt="..."/>
                <div className="card-body bg-success text-white">
                    <h3 className="card-title">{props.info.name}</h3>
                    <p className="card-text">{props.info.description}</p>                                       
                </div>
                <div class="card-footer text-muted">
                    ${props.info.price}.00
                </div>
            </div>
        </div>
    );
}

export default Product;