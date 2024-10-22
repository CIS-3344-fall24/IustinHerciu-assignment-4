// This page will include the Navigation Bar
// Make sure to export this to `App.jsx`

export default function NavBar() {
    return (
        <nav className="navbar">
            {/* link that when click will take you back to the home page */}


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