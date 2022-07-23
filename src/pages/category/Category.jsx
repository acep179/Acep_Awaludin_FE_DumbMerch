import React from 'react'
import { ListCategoryTable, NavBar } from '../../component'
import { useQuery } from "react-query";
import { API } from '../../config/api';

function Category() {

    let { data: categories } = useQuery('categoriesCache', async () => {
        const response = await API.get('/categories');
        return response.data.data.categories;
    });

    console.log(categories)

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
                    {categories?.map((item) => {
                        return (
                            <ListCategoryTable key={item.id} id={item.id} name={item.name} />
                        )
                    })}
                </table>
            </div >
        </div>
    )
}

export default Category