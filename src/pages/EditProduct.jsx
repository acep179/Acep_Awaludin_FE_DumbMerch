import React from 'react'
import { NavBar } from './../component'

function EditProduct() {
    return (
        <div>
            <NavBar />
            <div className="container">
                <h5>Edit Product</h5>
                <form>
                    <input type="file" className='mb-3' />
                    <input type="text" class="form-control bg-grey-700 mb-3" id="inputName" aria-describedby="inputName" value="Mouse" />
                    <textarea class="form-control bg-grey-700 mb-3" id="formControlTextarea1" rows="3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</textarea>
                    <input type="number" class="form-control bg-grey-700 mb-3" id="inputPrice" aria-describedby="inputPrice" value="500.000" />
                    <input type="number" class="form-control bg-grey-700 mb-5" id="inputQty" aria-describedby="inputQty" value="600" />
                    <button type='button' className='btn btn-success w-100'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default EditProduct