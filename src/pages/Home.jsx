import SEO from '../components/SEO'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import Products from '../components/Products'
import Testimonials from '../components/Testimonials'
import StructuredData from '../components/StructuredData'

const Home = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nurasa",
    "url": "https://nurasa.store",
    "logo": "https://nurasa.store/logo.png",
    "description": "Jajanan kering premium Nusantara dengan cita rasa pedas berkelas.",
    "sameAs": [
      "https://instagram.com/nurasa.store"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta Selatan",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+6285137143942",
      "contactType": "customer service"
    }
  };

  return (
    <>
      <SEO 
        title="Beranda" 
        description="Selamat datang di Nurasa. Nikmati jajanan kering premium Nusantara, dari Basreng yang renyah hingga Popcorn Gourmet yang lumer. Ada cerita di setiap rasa."
        url="/"
      />
      <StructuredData data={organizationData} />
      <Hero />
      <About />
      <Features />
      <Products />
      <Testimonials />
    </>
  )
}

export default Home
