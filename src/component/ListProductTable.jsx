import React from 'react'
import { Link } from 'react-router-dom'

function ListProductTable(product) {
    return (
        <tr>
            <td className='p-2'>{product.id}</td>
            <td className='p-2'>{product.image}</td>
            <td className='p-2'>{product.name}</td>
            <td className='p-2'>{product.desc}</td>
            <td className='p-2'>{product.price}</td>
            <td className='p-2'>{product.qty}</td>
            <td className='p-2'>
                <Link to={`/edit-product/${product.id}`} className='btn btn-success my-0 me-3'>Edit</Link>
                <Link to={`/delete-product/${product.id}`} className='btn btn-danger my-0'>Delete</Link>
            </td>
        </tr>
    )
}

export default ListProductTable