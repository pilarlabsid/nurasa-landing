import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url, type = 'website' }) => {
    const siteTitle = 'Nurasa - Ada Cerita di Setiap Rasa | Jajanan Kering Premium Nusantara';
    const fullTitle = title ? `${title} | Nurasa` : siteTitle;
    const siteDescription = 'Nurasa menghadirkan jajanan kering premium Nusantara dengan aneka pilihan rasa berkelas. Setiap gigitan adalah awal dari sebuah cerita baru.';
    const metaDescription = description || siteDescription;
    const metaKeywords = keywords || 'nurasa, jajanan kering, snack premium, aneka rasa, kuliner indonesia, basreng, popcorn, cemilan pedas';
    const siteUrl = 'https://nurasa.store'; // Update with actual URL if different
    const metaUrl = url ? `${siteUrl}${url}` : siteUrl;
    const metaImage = image || `${siteUrl}/og-image.webp`; // Ensure this image exists in public folder

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <link rel="canonical" href={metaUrl} />

            {/* Open Graph Tags */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content="Nurasa" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />

            {/* Other Meta Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="language" content="Indonesian" />
            <meta name="revisit-after" content="7 days" />
        </Helmet>
    );
};

export default SEO;
