import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('./pages/Home'))
const Catalog = lazy(() => import('./pages/Catalog'))
const Contact = lazy(() => import('./pages/Contact'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

import ErrorBoundary from './components/ErrorBoundary'
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
            <ScrollToTop />
            <div className="min-h-screen bg-warm-cream">
              <Navbar />
            <main>
              <Suspense fallback={<div className="min-h-[70vh] flex items-center justify-center"><div className="w-10 h-10 border-4 border-accent-amber border-t-transparent rounded-full animate-spin"></div></div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/katalog" element={<Catalog />} />
                  <Route path="/kontak" element={<Contact />} />
                  <Route path="/tentang" element={<AboutPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
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
