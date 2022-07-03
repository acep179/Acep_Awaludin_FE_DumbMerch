import React from 'react'
import Products from './../assets/img/product1.png'

function ProductCard() {
    return (
        <div className='container'>
            <h5 className='text-orange'>Product</h5>
            <div className="card bg-grey-800" style={{ width: 241 }}>
                <img src={Products} className="card-img-top" alt="Products" />
                <div className="card-body">
                    <h5 className="card-title text-orange">Mouse</h5>
                    <p className="card-text">Rp. 500.000</p>
                    <p className="card-text">Stock: 600</p>
                </div>
            </div>
        </div >
    )
}

export default ProductCard