import Layout from "../../Components/Layout/Layout"
import "./Contact.css"

const Contact = () => {
    return (
        <Layout>
            <section className="contact__main__section__container">
                <h1 className="contact__title">Déjanos tu mensaje y te responderemos a la brevedad</h1>
                <p className="contact__paragraph">Para cualquier duda o consulta sobre nuestros proyectos y equipos, complete el siguiente formulario y responderemos a la brevedad.</p>
                <form action="" className="contact__form">
                    <section className="contact__form--sections">
                        <label for="name">Nombre(s) *</label>
                        <input type="text" name="name" id="name" placeholder="write your name" required/>
                        <label for="lastName">Apellido(s) *</label>
                        <input type="text" name="lastName" id="lastName" placeholder="write your last name" required/>
                    </section>
                    <br />
                    <section className="contact__form--sections">
                        <label for="region">Región *</label>
                        <input type="text" name="region" id="region" placeholder="region" required/>
                        <label for="email">Correo *</label>
                        <input type="email" name="email" id="email" placeholder="correo eléctronico" required/>
                    </section>
                    <br />
                    <section className="contact__form--sections">
                        <label for="phone">Telefono *</label>
                        <input type="tel" name="phone" id="phone" placeholder="número telefonico" required/>
                        <label for="toWho">A quien va dirigido</label>
                        <select name="toWho" id="toWho">
                            <option value="general" selected>General</option>
                            <option value="tests">Mediciones</option>
                            <option value="rent">Alquiler de equipos</option>
                        </select>
                    </section>
                    <br />
                    <section className="contact__form--sections">
                        <label for="message">Ingrese su mensaje *</label>
                        <input type="text" name="message" id="message" />
                    </section>
                    <br />
                    <button>Enviar mensaje</button>
                </form>
            </section>
        </Layout>
    )
}

export default Contact