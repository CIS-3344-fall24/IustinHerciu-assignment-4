import "./stylesheet.css"
import {Link} from 'react-router-dom';

const NavBar = () =>{
  return (
      // use `<nav>` to represent a section of a page whose purpose is to provide navigation links
      <nav>
        {/* unordered List */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
  );
}


export default NavBar;
