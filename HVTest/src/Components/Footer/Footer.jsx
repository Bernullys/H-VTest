import { NavLink } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import "./Footer.css";


const Footer = () => {

    return (
        <footer>
            <nav className="footer__nav--container">

                <ul className="footer__nav__ul">
                    <h3>Enlaces</h3>

                    <li>
                        <NavLink to="/">
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/nosotros">
                            Nosotros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios">
                            Servicios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/proyectos">
                            Proyectos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cotiza">
                            Cotiza
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto">
                            Contacto
                        </NavLink>
                    </li>
                </ul>

                <ul className="footer__nav__ul">
                    <h3>Contactanos</h3>

                    <li>
                        <NavLink to="/">
                            mail
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/nosotros">
                            telefono
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios">
                            Direccion
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/proyectos">
                            Horario
                        </NavLink>
                    </li>
                </ul>

                <ul className="footer__nav__ul">
                    <h3>Servicios</h3>

                    <li>
                        <NavLink to="/">
                            Pruebas SAT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/nosotros">
                            Confección de mufas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios">
                            Termografias
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/proyectos">
                            Montaje en BT y AT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cotiza">
                            Automatización y Control
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto">
                        Mantención
                        </NavLink>
                    </li>
                </ul>

                <ul className="footer__nav__ul">

                    <h3>Nuestras redes</h3>

                    <a className="footer__solcial__logo" href="https://www.instagram.com/hvtest.cl/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram className="insta-logo"/>
                    </a>
                    <a className="footer__solcial__logo" href="https://www.linkedin.com/company/hv-test" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className="linke-logo"/>
                    </a>
                    <a className="footer__solcial__logo" href="" target="_blank" rel="noopener noreferrer">
                        <BsWhatsapp className="whatsapp-logo"/>
                    </a>
                </ul>

                <NavLink className="a-logo-spa" to="/">
                    <img className="logo__hvt--main" src="../../../src/assets/LogoHVTest&diagnosticsSpa.png" alt="HVTest-company-logo" />
                </NavLink>

            </nav>
        </footer>
    )
}

export default Footer