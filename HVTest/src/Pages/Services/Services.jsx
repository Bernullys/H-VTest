import Layout from "../../Components/Layout/Layout"
import { NavLink } from "react-router-dom"
import "./Services.css"

const Services = () => {
    return (
        <Layout>
            <section className="services__header__main__container">
                <section className="services__header__container">
                    <img src="../../../src/assets/torresElectricasV.png" alt="services-image-1" className="services__header--image-1"/>
                    <img src="../../../src/assets/derecha1.jpg" alt="services-image-1" className="services__header--image-2" />
                    <h1 className="services__header--main--title">Servicio de<br></br>ingeniería<br />
                        <b className="styling__word">eléctrica de</b><br />
                        <b className="styling__word">alto estandar</b></h1>
                    <p className="services__header--paragraph">En <b>HVTest</b>, nos comprometemos con la importancia de la infraestructura eléctrica, 
                        ofreciendo un amplio conjunto de <b>servicios especializados en el área de pruebas eléctricas de alta tensión.</b></p>
                </section>
            </section>
            <section className="services__content__main__container">
                <section className="services__content__container">
                    <h2 className="services__content__title">¿En que te podemos ayudar?</h2>
                    <p className="services__content__paragraph">Realizamos pruebas en diversos equipos instalados en sistemas eléctricos, 
                        incluyendo, pero no limitándonos a, transformadores de potencia, 
                        interruptores con tecnología SF6 o cualquier medio de extinción del arco eléctrico, 
                        desconectadores, transformadores de medición, conductores, celdas, 
                        descargadores de sobretensión, líneas de transmisión y sistemas de puesta a tierra, entre otros.</p>
                    <h2 className="services__content__subtitle">Conoce en detalle nuestros servicios</h2>
                    <section className="service__container">
                        <article className="service__container--article">
                            <h2 className="service__container--article--title">PRUEBAS ELÉCTRICAS DE ACEPTACIÓN A EQUIPOS DE ALTA TENSIÓN</h2>
                            <NavLink className="service__container--article--button--container" to="/servicios/pruebas">
                                <button className="service__container--article--button">Leer más</button>
                            </NavLink>
                        </article>
                    </section>
                    <section className="service__container-2">
                        <article className="service__container--article">
                            <h2 className="service__container--article--title-2">CONTROL Y PROTECCIONES ELÉCTRICAS</h2>
                            <p className="service__container--article--paragraph-2">Especializados en el control de sistemas eléctricos, 
                                nuestro equipo ofrece soluciones integrales, desde inspecciones técnicas en el sistema secundario de subestaciones 
                                hasta auditorías en los sistemas de protección y medida.</p>
                            <button className="service__container--article--button-2">Leer más</button>
                        </article>
                    </section>
                    <section className="service__container-3">
                        <article className="service__container--article">
                            <h2 className="service__container--article--title">MANTENIMIENTO Y PUESTA EN SERVICIO DE EQUIPOS ELÉCTRICOS</h2>
                            <p className="service__container--article--paragraph">Una parte crucial de nuestro servicio se centra en el mantenimiento y 
                                puesta en servicio de los equipos eléctricos instalados en Sistemas de Generación, Transmisión y Distribución eléctrica.</p>
                            <button className="service__container--article--button">Leer más</button>
                        </article>
                    </section>
                    <section className="service__container-4">
                        <article className="service__container--article">
                            <h2 className="service__container--article--title-2">ASESORÍA TÉCNICA</h2>
                            <p className="service__container--article--paragraph-4">Contamos con personal de ingeniería especializado para ofrecer 
                                servicios de asesoría profesional. Proporcionamos inspección técnica especializada y suministramos documentos, 
                                procedimientos y/o protocolos necesarios a nuestros clientes para garantizar la operación y mantenimiento de sus 
                                equipos eléctricos.</p>
                            <button className="service__container--article--button-2">Leer más</button>
                        </article>
                    </section>
                    <section className="service__container-5">
                        <article className="service__container--article">
                            <h2 className="service__container--article--title">ARRIENDO EQUIPOS DE PRUEBAS ELÉCTRICAS</h2>
                            <p className="service__container--article--paragraph-5">Con el objetivo de respaldar a nuestros clientes, en HVTest ofrecemos 
                                el arriendo de equipos para realizar ensayos eléctricos en excelente estado de operación. Estos equipos se encuentran con 
                                calibración y certificación vigente, garantizando así un servicio de la más alta calidad.</p>
                            <button className="service__container--article--button">Leer más</button>
                        </article>
                    </section>
                    
                </section>
            </section>
        </Layout>
    )
}

export default Services

