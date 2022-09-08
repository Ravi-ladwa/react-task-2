import { Link } from "react-router-dom";
import "./styles.css";
function Header() {
  return (
    <>
      <div>
        <ul>
          <c>React Workshop</c>
          <li>
            <Link to="/addlaptop">
              Add Laptop
            </Link>
          </li>
          <li>
            <Link to="/name">List</Link>
          </li>
          <li>
            <Link to="/" class href="#home">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Header;