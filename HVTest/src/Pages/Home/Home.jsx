import { NavLink } from "react-router-dom"
import Layout from "../../Components/Layout/Layout"
import GenericCardServices from "../../Components/GenericCardServices/GenericCardServices"
import "./Home.css"

const Home = () => {
    return (
        <Layout>
          <section id="home" className="home__main--container">
            <section className="main--title--container">
              <h1 className="home__main--title">Servicios de Ingeniería de Calidad para la Industria</h1>
            </section>
            <section className="home__main-buttons-container">
              <button>Contactanos</button>
              <button>Nuestros Proyectos</button>
            </section>
          </section>
          <section className="home__bottom">
            <article className="home__botton--article">
              <h2 className="home__botton--title">Bienvenidos a HVTest</h2>
              <p className="home__botton--paragraph">Somos una empresa de servicios electricos conformada por profesionales de ingenieria, especialistas en el area de baja, media y alta tension, orientados a satifaser las exigencias de nuestros clientes.</p>
             </article>
             <article className="home__botton--article">
              <h2 className="home__botton--title">¿En que te podemos ayudar?</h2>
             </article>
          </section>
          <section>
            <GenericCardServices />
          </section>
        </Layout>
    )
}
export default Home