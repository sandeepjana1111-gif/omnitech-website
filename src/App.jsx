import { Route, Routes } from 'react-router-dom'

import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
