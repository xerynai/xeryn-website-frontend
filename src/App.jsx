import { Routes, Route } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App