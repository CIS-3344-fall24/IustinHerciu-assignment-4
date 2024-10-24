import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ou0q9fi', 'template_yhtcwsz', form.current, {
                publicKey: 'F5MSoIoySbXe7rrcW',
            })
            .then(
                () => {
                    setMessageSent(true);
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>ME</span></h2>

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
        </section>
    );
}