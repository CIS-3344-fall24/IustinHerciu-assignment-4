import React from "react";
import profilePic from './images/profilePic.png'

export default function Profile() {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello, My name is</h3>
                <h1>Iustin Herciu</h1>
                <h3>And I am a <span className="multiple-text"></span></h3>
                <p>I am currently majoring in <span>Information Science and Technology B.S.</span></p>
                <p>My goal is to become a Software Engineer once I graduate and get my Bachelor of Science Degree.</p>

                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="btn">Download Resume</a>
            </div>

            <div className="profile-img">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={profilePic} alt="Profile"/>
            </div>

        </section>
    );
}