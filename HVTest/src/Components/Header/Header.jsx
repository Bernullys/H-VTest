import { NavLink } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import "./Header.css";


const Header = () => {

    const activePage = "active__page"

    return (
        <header>
            <nav className="header__nav--container">

                <NavLink className="a-logo" to="/">
                    <img className="logo__hvt--main--header" src="../../../src/assets/logoHVTrc1sinfondo.png" alt="HVTest-company-logo" />
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
                            to="/contacto"
                            className={({ isActive }) => isActive ? activePage : undefined}>
                                Contacto
                        </NavLink>
                    </li>
                </ul>
                <ul className="cotiza__header__button__container">
                    <li>
                        <NavLink
                            to="/cotiza"
                            id="cotiza__header__button">
                                Cotiza con nosotros
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header