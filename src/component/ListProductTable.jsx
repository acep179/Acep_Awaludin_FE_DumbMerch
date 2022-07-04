import React from 'react'

function ListProductTable(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.image}</td>
            <td>{props.productName}</td>
            <td>{props.descriptionShort}</td>
            <td>{props.price}</td>
            <td>{props.qty}</td>
            <td>
                <p className='btn btn-success my-0 me-3'>Edit</p>
                <p className='btn btn-danger my-0'>Delete</p>
            </td>
        </tr>
    )
}

export default ListProductTable