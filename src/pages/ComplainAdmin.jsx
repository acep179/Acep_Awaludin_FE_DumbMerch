import { React, useEffect, useState } from 'react'
import { NavBar, Contact } from '../component'
import { io } from "socket.io-client"

let socket
function ComplainAdmin() {

    const [contact, setContact] = useState(null)
    const [contacts, setContacts] = useState([])

    const loadContact = () => {
        socket.emit("load customer contacts")

        socket.on("customer contacts", (data) => {

            let dataContacts = data.filter(item => item.status !== 'admin')

            dataContacts = dataContacts.map((item) => ({
                ...item,
                message: "Click here to start message"
            }))

            setContacts(dataContacts)
        })
    }

    useEffect(() => {
        socket = io('http://localhost:5000')

        loadContact()

        return () => {
            socket.disconnect()
        }
    }, [])

    const onClickContact = (data) => {
        console.log(data);
        setContact(data)
    }

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className='row'>
                    <div style={{ height: '89.5vh' }} className="col-md-3 px-3 border-end border-dark overflow-auto">
                        <Contact
                            dataContact={contacts}
                            clickContact={onClickContact}
                            contact={contact} />
                    </div>
                    {/* <div style={{ maxHeight: '89.5vh' }} className="col-md-9 px-0">
                        <Chat contact={contact} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ComplainAdmin