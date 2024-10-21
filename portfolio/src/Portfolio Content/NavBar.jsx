// This page will include the Navigation Bar
// Make sure to export this to `App.jsx`

export default function NavBar() {
    return (
        <nav className="nav">
            {/* link that when click will take you back to the home page */}
            <h1 className="title">Portfolio</h1>

            {/* create list that will include the navbar options. use unordered list */}
            <ul>
                <li className="active">
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/experience">Experience</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>

        </nav>
    );
}