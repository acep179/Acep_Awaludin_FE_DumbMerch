import React from 'react'

function ListProductTable() {
    return (
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
                <tr>
                    <td>1</td>
                    <td>Mouse.jpg</td>
                    <td>Mouse</td>
                    <td>lorem ipsum mouse ...</td>
                    <td>500.000</td>
                    <td>600</td>
                    <td>
                        <p className='btn btn-success my-0 me-3'>Edit</p>
                        <p className='btn btn-danger my-0'>Delete</p>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Keyboard.jpg</td>
                    <td>Keyboard</td>
                    <td>lorem ipsum keyboard ...</td>
                    <td>700.000</td>
                    <td>600</td>
                    <td>
                        <p className='btn btn-success my-0 me-3'>Edit</p>
                        <p className='btn btn-danger my-0'>Delete</p>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default ListProductTable