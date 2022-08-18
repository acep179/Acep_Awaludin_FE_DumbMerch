import React from 'react'
import Logo from './../assets/img/logo.png'

function TransactionCardDetail(transactions) {
    return (
        <div className="card mb-3 bg-grey-800">
            <div className="d-flex align-items-center p-3">
                <img
                    src={transactions.image}
                    className="img-fluid rounded-start h-100"
                    alt={transactions.productName}
                    width={170}
                />
                <div className="card-body py-0">
                    <h5 className="card-title text-orange m-0">
                        {transactions.productName}
                    </h5>
                    <p className="card-text text-orange fw-light m-0">
                        {transactions.transactionDate}
                    </p>
                    <p className="card-text fw-light">
                        Price: Rp. {transactions.price}
                    </p>
                    <p className="card-text fw-bold">
                        Sub Total: Rp. {transactions.subTotal}
                    </p>
                </div>
                <img src={Logo} alt="Logo DumbMerch" width={70} height={70} />
            </div>
        </div>
    )
}

export default TransactionCardDetail