import { Link } from "react-router-dom";

//styles
import "./Navbar.css";

// components
import Searchbar from "../SearchBar/Searchbar";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>
            Cook <span>It</span>
          </h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
