import React from 'react'

function ListCategoryTable() {
    return (
        <div className='container'>
            <p>List Category</p>
            <table className='table-dark-striped w-100'>
                <tr>
                    <th>No</th>
                    <th>Category Name</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Mouse</td>
                    <td>
                        <p className='btn btn-success my-0 me-3'>Edit</p>
                        <p className='btn btn-danger my-0'>Delete</p>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Keyboard</td>
                    <td>
                        <p className='btn btn-success my-0 me-3'>Edit</p>
                        <p className='btn btn-danger my-0'>Delete</p>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default ListCategoryTable