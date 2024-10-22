// This page will include the Navigation Bar
// import `useEffect` and `useRef` to attach and detach event listeners,
// and to reference DOM elements directly in React.
import React, { useEffect, useRef } from 'react';

export default function NavBar() {

    // declare and initialize a `section reference` that will act as the tag for the sections of the page
    // declare and initialize a `link reference` that will act as the tag for all the links in the navigation bar
    // use `useRef` to initialize the references
    const secRef = useRef([]);
    const linkRef = useRef([]);

    return (
        <nav className="navbar">

            {/* create list that will include the navbar options. use unordered list */}
            <header className="header">
                <h1 className="title">Portfolio</h1>


                <ul>
                    <li className="active">
                        <a href="/profile">
                            Profile
                        </a>
                    </li>

                    <li>
                        <a href="/projects">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="/experience">
                            Experience
                        </a>
                    </li>

                    <li>
                        <a href="/contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </header>
        </nav>
    );
}

