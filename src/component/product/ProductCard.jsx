import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(product) {
    return (
        <div className="card bg-grey-800 m-3" style={{ width: 275 }}>
            <img src={`${product.image}`} className="card-img-top" alt={`${product.name}`} />
            <div className="card-body">
                <Link to={`/detail-product/${product.id}`}>
                    <h5 className="card-title text-orange">{product.name}</h5>
                </Link>
                <p className="card-text">{product.price}</p>
                <p className="card-text">{product.qty}</p>
            </div>
        </div >
    )
}

export default ProductCard