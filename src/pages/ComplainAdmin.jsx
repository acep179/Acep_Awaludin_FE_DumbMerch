import { React, useEffect, useState, useContext } from 'react'
import { NavBar, Contact, Chat } from '../component'
import { io } from "socket.io-client"
import { UserContext } from '../context/userContext'

let socket
function ComplainAdmin() {

    const [contact, setContact] = useState(null)
    const [contacts, setContacts] = useState([])
    const [messages, setMessages] = useState([])
    const [state] = useContext(UserContext)

    const loadContacts = () => {
        socket.emit("load customer contacts")

        socket.on("customer contacts", (data) => {

            let dataContacts = data.filter((item) => (item.status !== 'admin') &&
                (item.recipientMessage.length > 0 || item.senderMessage.length > 0))

            dataContacts = dataContacts.map((item) => ({
                ...item,
                message: "Click here to start message"
            }))

            setContacts(dataContacts)
        })
    }

    useEffect(() => {
        socket = io(process.env.REACT_APP_BASEURL, {
            auth: {
                token: localStorage.getItem("token") // we must set options to get access to socket server
            },
            query: {
                id: state.user.id
            }
        })

        socket.on("new message", () => {
            console.log("contact", contact)
            console.log("triggered", contact?.id)
            socket.emit("load messages", contact?.id)
        })

        loadContacts()
        loadMessages()

        socket.on("connect_error", (err) => {
            console.error(err.message); // not authorized
        });

        return () => {
            socket.disconnect()
        }
    }, [messages])

    const onClickContact = (data) => {
        setContact(data)
        socket.emit("load messages", data.id)
    }

    const loadMessages = (value) => {

        socket.on("messages", (data) => {
            if (data.length > 0) {
                const dataMessages = data.map((item) => ({
                    idSender: item.sender.id,
                    message: item.message
                }))
                console.log(dataMessages);
                setMessages(dataMessages)
            }
            loadContacts()
            const chatMessages = document.getElementById("chat-messages")
            chatMessages.scrollTop = chatMessages?.scrollHeight
        })
    }

    const onSendMessage = (e) => {
        if (e.key === 'Enter') {
            const data = {
                idRecipient: contact.id,
                message: e.target.value
            }

            socket.emit("send messages", data)
            e.target.value = ""
        }
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
                    <div style={{ maxHeight: '89.5vh' }} className="col-md-9 px-0">
                        <Chat
                            contact={contact}
                            messages={messages}
                            user={state.user}
                            sendMessage={onSendMessage}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComplainAdmin