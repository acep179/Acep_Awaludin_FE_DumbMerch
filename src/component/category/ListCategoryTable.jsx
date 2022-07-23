import React from 'react'

function ListCategoryTable(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>
                <p className='btn btn-success my-0 me-3'>Edit</p>
                <p className='btn btn-danger my-0'>Delete</p>
            </td>
        </tr>
    )
}

export default ListCategoryTable