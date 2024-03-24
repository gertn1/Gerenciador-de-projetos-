import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar(){
    return(
        
        <div className={styles.linksNavbar}>
        <Link to="/">Home</Link>
        <Link to="/company">Company</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/newproject">New Project</Link>
      </div>
    

    )
}
export default NavBar;