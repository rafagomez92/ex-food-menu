import React from 'react';

const Product = ({dato}) => {    
    
    return(
        <div className="container mt-3">
            <div className="card" style={{width: '18rem'}}>
                <img src={dato.img} className="card-img-top" alt="..."/>
                <div className="card-body bg-success text-white">
                    <h3 className="card-title">{dato.name}</h3>
                    <p className="card-text">{dato.description}</p>                    
                </div>
                <div class="card-footer text-muted">
                    ${dato.price}.00
                </div>
            </div>
        </div>



        // <div>
        //     <p></p>
        //     <p>{info.price}</p>
        //     <p>{info.description}</p>
        // </div>




        // <div className="card bg-secondary text-white mt-2">
        //     <div className="card-header">                
        //     {info.id}
        //     </div>
        //     <div className="card-body">
        //         <h5 className="card-title">{info.name}</h5>
        //         <p className="card-text">{info.description}</p>
        //         <p>${info.price}</p>
        //     </div>
        // </div>
    );
}

export default Product;