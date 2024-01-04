import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home/Home'
import Us from '../Us/Us'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Services from '../Services/Services'
import ServiceOne from '../Services/ServiceOne'
import ServiceTwo from '../Services/ServiceTwo'
import ServiceThree from '../Services/ServiceThree'
import ServiceFour from '../Services/ServiceFour'
import ServiceFive from '../Services/ServiceFive'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes ([
    { path: '/', element: <Home /> },
    { path: '/nosotros', element: <Us /> },
    { path: '/proyectos', element: <Projects /> },
    { path: '/contactanos', element: <Contact /> },
    { path: '/servicios', element: <Services /> },
    { path: '/servicios/pruebas', element: <ServiceOne />},
    { path: '/servicios/control', element: <ServiceTwo />},
    { path: '/servicios/mantenimiento', element: <ServiceThree />},
    { path: '/servicios/asesoría', element: <ServiceFour />},
    { path: '/servicios/arriendo', element: <ServiceFive />},
  ])
  return (
    routes
  )
}

function App() {

  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
