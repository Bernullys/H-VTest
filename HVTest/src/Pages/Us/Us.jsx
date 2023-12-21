import Layout from "../../Components/Layout/Layout";
import { BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs"

import "./Us.css"

const Us = () => {
    return (
        <Layout>
            <section className="us__top__section--main--container">
                <section className="us__social__logos__container">
                    <a className="footer__solcial__logo" href="https://www.instagram.com/hvtest.cl/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram className="insta-logo"/>
                    </a>
                    <a className="footer__solcial__logo" href="https://www.linkedin.com/company/hv-test" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className="linke-logo"/>
                    </a>
                    <a className="footer__solcial__logo" href="" target="_blank" rel="noopener noreferrer">
                        <BsWhatsapp className="whatsapp-logo"/>
                    </a>
                </section>
                <section className="us__top__section--image">
                    <h1 className="us__top__section--heding">Excepteur <b className="styling__word">sint occaecat</b> <br />cupidatat non proident</h1>
                </section>
            </section>
            <section className="us__middle__section--main--container">
                <section className="us__middle__section--description--container">
                    <h2>Conoce nuestro equipo</h2>
                    <p>Estamos conformados por profesionales de alto grado de experiencia en el mercado eléctrico del país, presentes en faenas de importantes empresas del rubro eléctrico, especialistas en el diagnóstico, mantención, resolución de problemas y soluciones integrales en el ámbito eléctrico, industrial y de manufactura. Nuestro servicio profesional y técnico está comprometido en la entrega de un servicio de calidad con altos estándares de calidad y seguridad. </p>
                </section>
                <section className="us__middle__section--cards--container">
                    <article className="personal__card__container">
                        <section className="image__card__container">
                            <img src="" alt="" />
                        </section>
                        <section className="text-content__card__container">
                            <h3>Jose Manuel Freitez</h3>
                            <h4>Ingeniero Eléctricista</h4>
                            <section className="us__social__logos__container--personal-card">
                                <a className="footer__solcial__logo" href="https://www.linkedin.com/company/hv-test" target="_blank" rel="noopener noreferrer">
                                    <BsLinkedin className="card-linke-logo"/>
                                </a>
                            </section>
                        </section>
                    </article>
                </section>
            </section>
        </Layout>
    )
}

export default Us;