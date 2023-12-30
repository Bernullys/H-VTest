import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home/Home'
import Us from '../Us/Us'
import Projects from '../Projects/Projects'
import Services from '../Services/Services'
import Quotes from '../Quotes/Quotes'
import Contact from '../Contact/Contact'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes ([
    { path: '/', element: <Home /> },
    { path: '/nosotros', element: <Us /> },
    { path: '/proyectos', element: <Projects /> },
    { path: '/servicios', element: <Services /> },

    { path: '/contactanos', element: <Contact /> },
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
