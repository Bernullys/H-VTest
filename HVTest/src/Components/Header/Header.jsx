import { NavLink } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import "./Header.css";


const Header = () => {
    return (
        <header>
            <nav className="header__nav--container">

                <NavLink className="a-logo" to="/">
                    <img className="logo__hvt--main" src="../../../src/assets/logo-HVT-rc1-sin-fondo.png" alt="HVTest-company-logo" />
                </NavLink>

                <ul className="header__nav__ul--center">
                    <li>
                        <NavLink to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/nosotros">Nosotros</NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios">Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/proyectos">Proyectos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cotiza">Cotiza</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto">Contacto</NavLink>
                    </li>
                </ul>

                <ul className="header__nav__ul--right">
                    <a className="icon__container" href="" target="_blank" rel="noopener noreferrer">
                        <BsInstagram className="insta-logo"/>
                    </a>
                    <a className="icon__container" href="" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className="linke-logo"/>
                    </a>
                    <a className="icon__container" href="" target="_blank" rel="noopener noreferrer">
                        <BsWhatsapp className="whatsapp-logo"/>
                    </a>
                </ul>

            </nav>
        </header>
    )
}

export default Header