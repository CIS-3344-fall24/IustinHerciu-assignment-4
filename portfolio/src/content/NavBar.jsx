// This page will include the Navigation Bar
// import `useEffect` and `useRef` to attach and detach event listeners,
// and to reference DOM elements directly in React.
// import React Router Link as well for the navbar
// import { Fade } from "react-awesome-reveal"

import React from 'react';
import { Fade } from "react-awesome-reveal"

export default function NavBar() {

    /**
     * Declare and initialize an Array to store references to each section of the page
     * Declare and initialize an Array to store references to each link in the NavBar
     * Use `useRef` to initialize the references
     */


    return (
        <nav className="navbar">

            <header className="header">
                <Fade cascade damping={0.7}>


                    <h1 className="title">Portfolio</h1>

                    {/* create list that will include the navbar options. use unordered list */}

                    <ul>
                        {/* Store each <li> element in linkRef at the correct index */}
                        <li className="active">
                            <a href="#top">     {/* Use 'top' to go back to the top of the page */}
                                Profile
                            </a>
                        </li>

                        <li>
                            <a href="#projects">
                                Projects
                            </a>
                        </li>

                        <li>
                            <a href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </Fade>
            </header>
        </nav>
    );
}

