import React from 'react'
import { Link } from 'react-router-dom'
import Products from './../assets/img/product1.png'



function ProductCard(props) {


    return (
        <div className='container'>
            <div className="card bg-grey-800" style={{ width: 241 }}>
                <img src={props.image} className="card-img-top" alt="Products" />
                <div className="card-body">
                    <Link to="/detail-product">
                        <h5 className="card-title text-orange">{props.name}</h5>
                    </Link>
                    <p className="card-text">{props.price}</p>
                    <p className="card-text">{props.qty}</p>
                </div>
            </div >
        </div >
    )
}

export default ProductCard