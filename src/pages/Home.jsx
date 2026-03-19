import SEO from '../components/SEO'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import Products from '../components/Products'
import Testimonials from '../components/Testimonials'
import StructuredData from '../components/StructuredData'
import { localBusinessData, webSiteData, siteNavigationData } from '../data/structuredData'

const Home = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nurasa",
    "url": "https://nurasa.store",
    "logo": "https://nurasa.store/logo-text.webp",
    "description": "Jajanan kering premium Nusantara yang hadir dengan aneka varian rasa unik dan berkelas.",
    "sameAs": [
      "https://instagram.com/nurasa.store"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta Selatan",
      "addressCountry": "ID"
    },
    "areaServed": "ID",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Jajanan Nusantara",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Camilan Kering Premium Indonesia"
          }
        }
      ]
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
        title="" 
        description="Selamat datang di Nurasa. Nikmati jajanan kering premium Nusantara dengan berbagai pilihan varian rasa yang menggugah selera. Ada cerita di setiap rasa."
        url="/"
      />
      <StructuredData data={webSiteData} />
      <StructuredData data={siteNavigationData} />
      <StructuredData data={organizationData} />
      <StructuredData data={localBusinessData} />
      <Hero />
      <About />
      <Features />
      <Products />
      <Testimonials />
    </>
  )
}

export default Home
