import { NavLink } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import "./Header.css";


const Header = () => {

    const activePage = "active__page"

    return (
        <header>
            <nav className="header__nav--container">

                <NavLink className="a-logo" to="/">
                    <img className="logo__hvt--main" src="../../../src/assets/logo-HVT-rc1-sin-fondo.png" alt="HVTest-company-logo" />
                </NavLink>

                <ul className="header__nav__ul--center">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? activePage : undefined}>
                                Inicio
                            </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/nosotros"
                            className={({ isActive }) => isActive ? activePage : undefined}>
                                Nosotros
                            </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/servicios"
                            className={({ isActive }) => isActive ? activePage : undefined}>
                                Servicios
                            </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/proyectos"
                            className={({ isActive }) => isActive ? activePage : undefined}>
                                Proyectos
                            </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/cotiza"
                            className={({ isActive }) => isActive ? activePage : undefined}>
                                Cotiza
                            </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contacto"
                            className={({ isActive }) => isActive ? activePage : undefined}>
                                Contacto
                            </NavLink>
                    </li>
                </ul>

                <ul className="header__nav__ul--right">
                    <a className="icon__container" href="https://www.instagram.com/hvtest.cl/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram className="insta-logo"/>
                    </a>
                    <a className="icon__container" href="https://www.linkedin.com/company/hv-test" target="_blank" rel="noopener noreferrer">
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