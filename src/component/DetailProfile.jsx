import React from 'react'
import ProfileImage from './../assets/img/profile.png'

function DetailProfile() {
    return (
        <div className='col-6'>
            <h5 className='text-orange'>My Profile</h5>
            <div className='row'>
                <div className='col-6'>
                    <img className='w-100' src={ProfileImage} alt="Profile Photos" />
                </div>
                <div className='col-6'>
                    <div>
                        <p className="text-orange mb-0">Name</p>
                        <p>Yosep</p>
                    </div>
                    <div>
                        <p className="text-orange mb-0">Email</p>
                        <p>yosepgans@gmail.com</p>
                    </div>
                    <div>
                        <p className="text-orange mb-0">Phone</p>
                        <p>083896833122</p>
                    </div>
                    <div>
                        <p className="text-orange mb-0">Gender</p>
                        <p>Male</p>
                    </div>
                    <div>
                        <p className="text-orange mb-0">Address</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProfile