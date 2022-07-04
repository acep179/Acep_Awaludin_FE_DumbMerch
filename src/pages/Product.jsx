import React from 'react'
import { ListProductTable, NavBar } from './../component'

let data = [
    {
        id: 1,
        image: 'Mouse.jpg',
        productName: 'Mouse',
        descriptionShort: 'lorem ipsum mouse ...',
        price: 500.000,
        qty: 600
    },
    {
        id: 2,
        image: 'Keyboard.jpg',
        productName: 'Keyboard',
        descriptionShort: 'lorem ipsum Keyboard ...',
        price: 700.000,
        qty: 600
    },
]

function Product() {
    return (
        <div>
            <NavBar />
            <div className='container'>
                <p>List Category</p>
                <table className='table-dark-striped w-100'>
                    <tr>
                        <th>No</th>
                        <th>Photo</th>
                        <th>Product Name</th>
                        <th>Product Desc</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Action</th>
                    </tr>
                    {data.map((item) => {
                        return (
                            <ListProductTable id={item.id} image={item.image} productName={item.productName} descriptionShort={item.descriptionShort} price={item.price} qty={item.qty} />
                        )
                    })}
                </table>
            </div >
        </div >
    )
}

export default Product