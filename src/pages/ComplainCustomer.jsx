import { React, useState } from 'react'
import { NavBar, Contact, Chat } from '../component'
import dataContact from '../fakeData/contact'

function ComplainAdmin() {

    const [contact, setContact] = useState(null)

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className='row'>
                    <div style={{ height: '89.5vh' }} className="col-md-3 px-3 border-end border-dark overflow-auto">
                        <Contact dataContact={dataContact} setContact={setContact} contact={contact} />
                    </div>
                    <div style={{ maxHeight: '89.5vh' }} className="col-md-9 px-0">
                        <Chat contact={contact} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComplainAdmin