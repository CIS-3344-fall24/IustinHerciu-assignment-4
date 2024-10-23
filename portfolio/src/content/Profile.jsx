import profilePic from './images/profilePic.png'
// import `useEffects` and typed.js for text animations
import React, {useEffect} from "react";
import Typed from "typed.js";

export default function Profile() {

    // use `useEffect` to create typing animation
    useEffect(() => {
        const typed = new Typed('.multiple-text', {
            strings: ['College Student at Temple University', 'Entry-Level Software Developer'],
            typeSpeed: 100,     // How fast the text is typed
            backSpeed: 100,     // How fast the text is erased
            backDelay: 100,     // Delay before typing the 2nd string
            loop: true          // Loop the typing animation forever
        });

        // Cleanup the Typed instance on component unmount
        // Use `.destroy()` to destroy the Typed.js instance
        return () => {
            typed.destroy();
        };
    })

    return (
        <section className="home">
            <div className="home-content">
                <h3>Hello, My name is</h3>
                <h1>Iustin Herciu</h1>
                <h3>And I am a <span className="multiple-text"></span></h3>
                <p>I am currently majoring in <span>Information Science and Technology B.S.</span></p>
                <p>My goal is to become a Software Engineer once I graduate and get my Bachelor of Science Degree.</p>

                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="/Resume.pdf" className="btn" download={"Resume.pdf"}>Download Resume</a>
            </div>

            <div className="profile-img">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={profilePic} alt="Profile"/>
            </div>

        </section>
    );
}