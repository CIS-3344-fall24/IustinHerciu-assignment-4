import './App.css';
import NavBar from "./content/NavBar";
import Profile from "./content/Profile";
import Projects from "./content/Projects";
import Experience from "./content/Experience";
import Contact from "./content/Contact";

function App() {
    // check if the URL changes to whatever element we click on
    // use `window.location`
    // console.log(window.location);


    return (
        <>
            <NavBar />
            <Profile />
            <Projects />
            <Experience />
            <Contact />
        </>);
    }

export default App;
