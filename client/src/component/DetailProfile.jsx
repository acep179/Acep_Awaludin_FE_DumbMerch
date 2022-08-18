import React from 'react'

function DetailProfile(profile) {
    return (
        <div className='col-6'>
            <h5 className='text-orange'>My Profile</h5>
            <div className='row'>
                <div className='col-6'>
                    <img
                        className='w-100'
                        src={profile.image}
                        alt={profile.name} />
                </div>
                <div className='col-6'>
                    <div>
                        <p className="text-orange mb-0">
                            Name
                        </p>
                        <p>
                            {profile.name}
                        </p>
                    </div>
                    <div>
                        <p className="text-orange mb-0">
                            Email
                        </p>
                        <p>
                            {profile.email}
                        </p>
                    </div>
                    <div>
                        <p className="text-orange mb-0">
                            Phone
                        </p>
                        <p>
                            {profile.phone}
                        </p>
                    </div>
                    <div>
                        <p className="text-orange mb-0">
                            Gender
                        </p>
                        <p>
                            {profile.gender}
                        </p>
                    </div>
                    <div>
                        <p className="text-orange mb-0">
                            Address
                        </p>
                        <p>
                            {profile.address}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProfile