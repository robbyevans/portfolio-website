import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <>
      <Router className='app-container'>
        <Navbar/>
      
        <Routes>
          <Route path="/" exact element={<Banner/>}>
          </Route>
          <Route path="/About" element={<About/>}>
          </Route>
          <Route path="/Skills" element={<Skills/>}>
          </Route>
          <Route path="/Projects" element={<Projects/>}>
          </Route>
          <Route path="/Contact" element={<Contact/>}>
          </Route>
      
          <Route path="*" element={<h1>404 NOT FOUND</h1>}>
          </Route>
        </Routes>
        <Footer/>
      </Router>
      </>
    </div>
  )
}

export default App