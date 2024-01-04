import Layout from "../../Components/Layout/Layout"

function TestGears ( { name, brand, model, image, description, characteristics }) {
    return (
        <Layout>
            <h1>Arriendo de Equipos de Pruebas Eléctricas</h1>
            <article>
                <h1>{name}</h1>
                <img src={image} alt="Equipo-de-medida.eléctrica" />
                <h2>{model}</h2>
                <h3>{brand}</h3>
                <p>{description}</p>
                <p>{characteristics}</p>
            </article>
        </Layout>
    )
}

export default TestGears