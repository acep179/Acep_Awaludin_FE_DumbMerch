import React from 'react'
import { NavBar } from '../../component'

function AddCategory() {
    return (
        <div>
            <NavBar />
            <div className='container' >
                <h5>Edit Category </h5>
                <form >
                    <input className='w-100 bg-grey-700 border border-white my-5' type="text" placeholder='Mouse' />
                    <button type='button' className='btn btn-success w-100' > Save </button>
                </form>
            </div>
        </div>
    )
}

export default AddCategory