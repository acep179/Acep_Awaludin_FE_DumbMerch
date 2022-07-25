import { React, useEffect } from 'react'
import { NavBar } from '../component'
import { io } from "socket.io-client"

let socket
function ComplainCustomer() {

    // const [contact, setContact] = useState(null)

    useEffect(() => {
        socket = io('http://localhost:5000')

        return () => {
            socket.disconnect()
        }
    }, [])


    return (
        <div>
            <NavBar />
            {/* <div className="container">
                <div className='row'>
                    <div style={{ height: '89.5vh' }} className="col-md-3 px-3 border-end border-dark overflow-auto">
                        <Contact dataContact={dataContact} setContact={setContact} contact={contact} />
                    </div>
                    <div style={{ maxHeight: '89.5vh' }} className="col-md-9 px-0">
                        <Chat contact={contact} />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default ComplainCustomer