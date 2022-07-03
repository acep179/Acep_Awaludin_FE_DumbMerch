import React from 'react'
import { NavBar, DetailProfile, ProductCardDetail } from './../component'

function Profile() {
    return (
        <div>
            <NavBar />
            <div className='container'>
                <div className='row'>
                    <DetailProfile />
                    <ProductCardDetail />
                </div>
            </div>
        </div>
    )
}

export default Profile