import React, { useRef, useState } from 'react';    // Import hooks from React
import emailjs from '@emailjs/browser';             // Import emailjs for sending form data via email
import {FaSquareGithub} from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";




export default function Contact() {
    /**
     * Create constant that references the form to access its values, and create
     * another constant that uses State to track if the message was sent successfully
     */
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);

    /**
     * Function that gets triggered when the form is submitted
     * @param e
     */
    const sendEmail = (e) => {
        e.preventDefault();     // Prevents the form from being submitted

        // Use emailjs to send the form data to the specified service and template
        emailjs
            .sendForm(
                'service_ou0q9fi',
                'template_yhtcwsz',
                form.current, {
                publicKey: 'F5MSoIoySbXe7rrcW',
            })      // keys from emailjs
            .then(
                () => {
                    setMessageSent(true);       // Update state to show success message if email is sent
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);   // Log error message if message fails to send
                },
            );
    };

    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>ME</span></h2>

            {/* Icons with links */}
            <div className={"icons"}>
                <a href={"https://github.com/iustinherciu2000"} target={"_blank"} rel="noreferrer">
                    <FaSquareGithub className={"icon"}/>
                </a>

                <a href={"https://www.linkedin.com/in/iustin-herciu-193446305/"} target={"_blank"} rel="noreferrer">
                    <FaLinkedin className={"icon"}/>
                </a>

                <a href={"https://www.instagram.com/iustin__lifts/"} target={"_blank"} rel="noreferrer">
                    <FaInstagramSquare className={"icon"}/>
                </a>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <div className="input-box">
                    <input type={"text"}
                           name={"to_name"}
                           placeholder={"Full Name"}/>
                </div>

                <div className="input-box">
                    <input type={"email"}
                           name={"from_name"}
                           placeholder={"Email Address"}
                           required/>
                </div>

                <div className="input-box">
                    <input type={"text"}
                           name={"subject"}
                           placeholder={"Email Subject"}/>
                </div>

                <div className="input-box">
                    <textarea name={"message"}
                              cols="30"
                              rows="10"
                              placeholder={"Your Message"}>
                    </textarea>
                </div>

                {/* Conditionally render the success message */}
                {messageSent && <p className="success-message">Your message has been sent successfully!</p>}

                <input type={"submit"} value="Send Message" className={"btn"}/>

            </form>

            <footer className="footer">
                <div className="footer-text">
                    <p>Copyright &copy; 2024 by Iustin Herciu | All Rights Reserved.</p>
                </div>
            </footer>
        </section>
    );
}