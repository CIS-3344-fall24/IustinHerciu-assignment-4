import './App.css';
import NavBar from "./Portfolio Content/NavBar";
import Profile from "./Portfolio Content/Profile";
import Projects from "./Portfolio Content/Projects";
import Experience from "./Portfolio Content/Experience";
import Contact from "./Portfolio Content/Contact";

function App() {
    // check if the URL changes to whatever element we click on
    // use `window.location`
    // console.log(window.location);

    // this var will do something inside each class
    // make sure it starts with a Capital letter so when rendered, it doesn't render out a random HTML component
    let element
    // eslint-disable-next-line default-case
    switch (window.location.pathname) {
        case "/profile":
            element = <Profile />
            break

        case "/projects":
            element = <Projects />
            break

        case "/experience":
            element = <Experience />
            break

        case "/contact":
            // eslint-disable-next-line no-unused-vars
            element = <Contact />
            break
    }
    return (
        <>
            <NavBar />
            <div className="container">{element}</div>
            {/*<Profile />*/}
            {/*<Projects />*/}
            {/*<Experience />*/}
            {/*<Contact />*/}
        </>);
    }

export default App;
