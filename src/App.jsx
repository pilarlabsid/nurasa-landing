import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Contact from './pages/Contact'
import AboutPage from './pages/AboutPage'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './pages/NotFound'

import { CartProvider } from './context/CartContext'

import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-warm-cream">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/katalog" element={<Catalog />} />
                <Route path="/kontak" element={<Contact />} />
                <Route path="/tentang" element={<AboutPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Analytics />
        </Router>
      </CartProvider>
    </HelmetProvider>
  )
}

export default App
