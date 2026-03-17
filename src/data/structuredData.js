export const webSiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Nurasa",
  "url": "https://nurasa.store"
};

export const siteNavigationData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "SiteNavigationElement",
      "position": 1,
      "name": "Katalog Produk",
      "url": "https://nurasa.store/katalog"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 2,
      "name": "Tentang Kami",
      "url": "https://nurasa.store/tentang"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 3,
      "name": "Hubungi Kami",
      "url": "https://nurasa.store/kontak"
    }
  ]
};

export const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "name": "Nurasa",
  "image": "https://nurasa.store/og-image.webp",
  "@id": "https://nurasa.store",
  "url": "https://nurasa.store",
  "telephone": "+6285137143942",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jakarta Selatan",
    "addressRegion": "DKI Jakarta",
    "addressCountry": "ID"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Indonesia"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.2088,
    "longitude": 106.8456
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://instagram.com/nurasa.store"
  ],
  "priceRange": "$$"
};
