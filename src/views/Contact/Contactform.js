import { useState, useEffect, useRef } from "react"
import useInput from "../../hooks/useInput"

const ContactForm = () => {
    const [name, resetName, nameAttribs] = useInput("name", "")
    const [email, resetEmail, emailAttribs] = useInput("email", "")
    const [message, resetMessage, messageAttribs] = useInput("message", "")

    const [error, setError] = useState("")

    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()
    const errorRef = useRef()

    useEffect(() => {
        setError("")
    }, [name, email, message])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Okayyyyy !!")
        resetName()
        resetEmail()
        resetMessage()
    }
    return (
        <section className="contact-form container">
            <p>
                N'hésitez pas à nous contacter pour toute demande d'information
                ! Nous nous ferons un plaisir de revenir vers vous rapidement.
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Votre nom:</label>
                <input
                    type="text"
                    id="username"
                    ref={nameRef}
                    autoComplete="off"
                    {...nameAttribs}
                    required
                />
                <label htmlFor="email">Votre email:</label>
                <input
                    type="text"
                    id="useremail"
                    ref={emailRef}
                    autoComplete="off"
                    {...emailAttribs}
                    required
                />
                <label htmlFor="message">Votre message:</label>
                <textarea
                    type="text"
                    id="usermessage"
                    ref={messageRef}
                    autoComplete="off"
                    {...messageAttribs}
                    required
                />

                <button>Sign In</button>
            </form>
        </section>
    )
}

export default ContactForm
