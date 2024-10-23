// This page will include the Navigation Bar
// import `useEffect` and `useRef` to attach and detach event listeners,
// and to reference DOM elements directly in React.
import React, { useEffect, useRef } from 'react';

export default function NavBar() {

    /**
     * Declare and initialize an Array to store references to each section of the page
     * Declare and initialize an Array to store references to each link in the NavBar
     * Use `useRef` to initialize the references
     */
    const secRef = useRef([]);
    const linkRef = useRef([]);

    /**
     * @useEffect -> use it to `synchronize a component with an external system`
     *
     */
    useEffect(() => {
        /**
         * Create a function to handle scroll events and highlight the correct navbar link
         */
        const handleScrolling = () => {
            const top = window.scrollY;     // Get the position of the current vertical scroll

            /**
             * Loop through each section to check which one is in view
             *
             * @section: represents each individual section of your webpage that you want to track
             * @index: the position of the current section in the array
             */
            secRef.current.forEach((section, index) => {
                const offset = section.offsetTop - 150;
                const height = section.offsetHeight;

                // If the current scroll position is within the section, highlight the corresponding link
                if (top >= offset && top < offset + height) {
                    linkRef.current.forEach(link => link.classList.remove('active'));   // Remove active state from all links
                    linkRef.current[index].classList.add('active');     // Add active state to the current section's link
                }
            });

            // Sticky navbar
            const header = document.querySelector('.header');
            // If the page is scrolled more than 100 pixels vertically, the 'sticky' class is added.
            // Otherwise, the 'sticky' class is removed.
            header.classList.toggle('sticky', window.scrollY > 100);




        }
    }, []);
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

