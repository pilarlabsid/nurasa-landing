import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Contact from './pages/Contact'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound'

import ErrorBoundary from './components/ErrorBoundary'
import Preloader from './components/Preloader'
import TopProgressBar from './components/TopProgressBar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import { CartProvider } from './context/CartContext'

import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <CartProvider>
          <Router>
            <TopProgressBar />
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
            <SpeedInsights />
          </Router>
        </CartProvider>
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App
