import React from 'react'
import { useQuery } from "react-query";
import { Link } from 'react-router-dom';
import { ListCategoryTable, NavBar } from '../../component'
import { API } from '../../config/api';

function Category() {

    let { data: categories } = useQuery('categoriesCache', async () => {
        const response = await API.get('/categories');
        return response.data.data.categories;
    });

    return (
        <div>
            <NavBar />
            <div className='container d-flex flex-column'>
                <p>List Category</p>
                <Link className='btn btn-light mb-2 ms-auto' to={'/add-category'}>Add Category</Link>
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