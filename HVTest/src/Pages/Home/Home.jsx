import { NavLink } from "react-router-dom"
import Layout from "../../Components/Layout/Layout"
import "./Home.css"

const Home = () => {
    return (
        <Layout>
          <section id="home" className="home__main--container">
            <h1 className="home__main--title">Servicios de Ingeniería de Calidad para la Industria</h1>
            <section className="home__main-buttons-container">
              <button>Contactanos</button>
              <button>Nuestros Proyectos</button>
            </section>
          </section>
          <section className="home__bottom">
            <article className="home__botton--article">
            <NavLink to="nosotros">
              <h1 className="home__botton--title">Nosotros</h1>
            </NavLink>
              <p className="home__botton--paragraph">SOMOS UNA EMPRESA DE SERVICIOS ELECTRICOS CONFORMADA POR PROFESIONALES DE INGENIERIA, ESPECIALISTAS EN LAS AREAS DE BAJA, MEDIA Y ALTA TENSION, ORIENTADOS A SATIFASER LAS EXIGENCIAS Y REQUERIMIENTOS DE NUESTROS CLIENTES</p>
             </article>
             <article className="home__botton--article">
            <NavLink to="nosotros">
              <h1 className="home__botton--title">Nosotros</h1>
            </NavLink>
              <p className="home__botton--paragraph">SOMOS UNA EMPRESA DE SERVICIOS ELECTRICOS CONFORMADA POR PROFESIONALES DE INGENIERIA, ESPECIALISTAS EN LAS AREAS DE BAJA, MEDIA Y ALTA TENSION, ORIENTADOS A SATIFASER LAS EXIGENCIAS Y REQUERIMIENTOS DE NUESTROS CLIENTES</p>
             </article>
             <article className="home__botton--article">
            <NavLink to="nosotros">
              <h1 className="home__botton--title">Nosotros</h1>
            </NavLink>
              <p className="home__botton--paragraph">SOMOS UNA EMPRESA DE SERVICIOS ELECTRICOS CONFORMADA POR PROFESIONALES DE INGENIERIA, ESPECIALISTAS EN LAS AREAS DE BAJA, MEDIA Y ALTA TENSION, ORIENTADOS A SATIFASER LAS EXIGENCIAS Y REQUERIMIENTOS DE NUESTROS CLIENTES</p>
             </article>
          </section>
        </Layout>
    )
}
export default Home