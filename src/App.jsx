import { Routes, Route } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
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
      </Routes>
      <Footer />
    </>
  )
}

export default App