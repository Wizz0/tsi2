import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
      <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={ <Home />}> </Route>
          <Route path ="/about" element = { <About />}> </Route>
          <Route path ="/blog" element = { <Blog />}> </Route>
        </Routes>
        <Footer />
      </BrowserRouter>

      </>
  )
}

export default App;
