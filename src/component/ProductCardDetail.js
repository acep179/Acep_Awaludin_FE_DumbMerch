import React from 'react'
import Products from './../assets/img/product1.2.png'
import Logo from './../assets/img/logo.png'

function ProductCardDetail() {
    return (
        <div className='col-6'>
            <h5 className='text-orange'>
                My Transaction
            </h5>
            <div className="card mb-3 bg-grey-800">
                <div className="d-flex align-items-center p-3">
                    <img src={Products} className="img-fluid rounded-start h-100" alt="Product 1" />
                    <div className="card-body py-0">
                        <h5 className="card-title text-orange m-0">Mouse</h5>
                        <p className="card-text text-orange fw-light m-0"><strong>Saturday,</strong> 14 Juli 2021</p>
                        <p className="card-text fw-light">Price: Rp. 500.000</p>
                        <p className="card-text fw-bold">Sub Total: Rp. 500.000</p>
                    </div>
                    <img src={Logo} alt="Logo DumbMerch" width={70} height={70} />
                </div>
            </div>
        </div >
    )
}

export default ProductCardDetail