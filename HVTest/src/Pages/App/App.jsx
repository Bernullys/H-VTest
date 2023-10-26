import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home/Home'
import Us from '../Us/Us'
import Projects from '../Projects/Projects'
import Services from '../Services/Services'
import Quotes from '../Quotes/Quotes'
import Contact from '../Contact/Contact'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes ([
    { path: '/', element: <Home /> },
    { path: '/us', element: <Us /> },
    { path: '/projects', element: <Projects /> },
    { path: '/services', element: <Services /> },
    { path: '/quotes', element: <Quotes /> },
    { path: '/contact', element: <Contact /> },
  ])
  return (
    routes
  )
}

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
