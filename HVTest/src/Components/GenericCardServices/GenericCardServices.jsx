import Layout from "../Layout/Layout"
import { GiElectricalResistance } from "react-icons/gi"
import "./GenericCardServices.css"

const GenericCardServices = () => {
    return (
        <Layout>
            <section className="card__main__container">
                <h2 className="card__main__title">Nuestros Servicios</h2>
                <section className="card--outer--container">
                    <section className="card--inner--container">
                        <GiElectricalResistance className="card__service__icon"/>
                        <p className="card__text__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque</p>
                        <button className="card__service__button">Ver Servicio</button>    
                    </section>
                    <section className="card--inner--container">
                        <GiElectricalResistance className="card__service__icon"/>
                        <p className="card__text__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque</p>
                        <button className="card__service__button">Ver Servicio</button>    
                    </section>
                    <section className="card--inner--container">
                        <GiElectricalResistance className="card__service__icon"/>
                        <p className="card__text__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque</p>
                        <button className="card__service__button">Ver Servicio</button>    
                    </section>
                    <section className="card--inner--container">
                        <GiElectricalResistance className="card__service__icon"/>
                        <p className="card__text__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque</p>
                        <button className="card__service__button">Ver Servicio</button>    
                    </section>
                </section>
            </section>
            <section className="projects__main__container">
                <section className="projects__section__title">
                    <h2 className="projects_title">Proyectos</h2>
                </section>
                <section className="grid__projects_images">
                    <article className="left__project__image">
                        <img src="../../../src/assets/izquierda1.JPG" alt="" />
                        <section  className="project__descripcion__main__container_right">
                            <section className="project__descripcion__main__section_right">
                                <h3>NOMBRE DEL CLIENTE</h3>
                                <p>Breve descripción del proyecto Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque . . .</p>
                                <button>Contactanos</button>
                            </section>
                        </section>
                    </article>
                    <article className="right__project__images">
                        <img src="../../../src/assets/derecha4.jpg" alt="" />
                        <section className="project__descripcion__main__container_left">
                            <section className="project__descripcion__main__section_left">
                                <h3>NOMBRE DEL CLIENTE2</h3>
                                <p>Breve descripción del proyecto Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque . . .</p>
                                <button>Contactanos</button>
                            </section>
                        </section>
                        <img src="../../../src/assets/derecha3.jpg" alt="" />
                        <section className="project__descripcion__main__container_left">
                            <section className="project__descripcion__main__section_left">
                                <h3>NOMBRE DEL CLIENTE2</h3>
                                <p>Breve descripción del proyecto Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque . . .</p>
                                <button>Contactanos</button>
                            </section>
                        </section>
                    </article>
                </section>

            </section>
            <section>
                <section className="projects__section__title">
                    <h2 className="projects_title">Clientes</h2>
                </section>

            </section>
        </Layout>
    )
}

export default GenericCardServices