import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Story from './components/Story'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-warm-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Story />
      </main>
      <Footer />
    </div>
  )
}

export default App
