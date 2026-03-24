import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import { Suspense, lazy, useState, useEffect } from 'react'

const Home = lazy(() => import('./pages/Home'))
const Catalog = lazy(() => import('./pages/Catalog'))
const Contact = lazy(() => import('./pages/Contact'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

import ErrorBoundary from './components/ErrorBoundary'
import Preloader from './components/Preloader'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import { CartProvider } from './context/CartContext'

import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

// Delayed Loader to prevent visual flicker on fast connections
// It waits 200ms before showing the spinner. If the page loads within 200ms, the user never sees this!
const DelayedSpinner = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return <div className="min-h-[70vh]" />; // Empty skeleton space

  return (
    <div className="min-h-[70vh] flex items-center justify-center animate-fade-in">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-[3px] border-accent-amber/20 border-t-accent-amber rounded-full animate-spin"></div>
        <span className="text-[10px] text-deep-cocoa/50 uppercase tracking-widest font-bold">Memuat...</span>
      </div>
    </div>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <CartProvider>
          <Router>
            <Preloader />
            <ScrollToTop />
            <div className="min-h-screen bg-warm-cream">
              <Navbar />
              <main>
                <Suspense fallback={<DelayedSpinner />}>
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
