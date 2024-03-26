import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Container from './Container'
import logo from '../../img/costs_logo.png'

function NavBar(){
    return(
        
        <div className={styles.linksNavbar}>
        <Container>
        <Link to="/"> <img src={logo} alt="Costs" /></Link>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/projects">Projetos</Link>
        
        
        </Container>
      </div>
    

    )
}
export default NavBar;