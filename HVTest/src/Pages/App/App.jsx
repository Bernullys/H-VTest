import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home/Home'
import Us from '../Us/Us'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Services from '../Services/Services'
import ServiceOne from '../Services/ServiceOne'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes ([
    { path: '/', element: <Home /> },
    { path: '/nosotros', element: <Us /> },
    { path: '/proyectos', element: <Projects /> },
    { path: '/contactanos', element: <Contact /> },
    { path: '/servicios', element: <Services /> },
    { path: '/servicios/pruebas', element: <ServiceOne />}
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
