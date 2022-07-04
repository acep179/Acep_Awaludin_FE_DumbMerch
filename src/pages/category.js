import React from 'react'
import { ListCategoryTable, NavBar } from './../component'

let data = [
    {
        id: 1,
        categoryName: 'Mouse',
    },
    {
        id: 2,
        categoryName: 'Keyboard',
    },
]

function Category() {
    return (
        <div>
            <NavBar />
            <div className='container'>
                <p>List Category</p>
                <table className='table-dark-striped w-100'>
                    <tr>
                        <th>No</th>
                        <th>Category Name</th>
                        <th>Action</th>
                    </tr>
                    {data.map((item) => {
                        return (
                            <ListCategoryTable id={item.id} categoryName={item.categoryName} />
                        )
                    })}
                </table>
            </div >
        </div>
    )
}

export default Category