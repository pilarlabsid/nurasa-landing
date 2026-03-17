import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-warm-cream flex items-center justify-center text-center px-6">
            <SEO title="404 - Halaman Tidak Ditemukan" />
            <div className="max-w-md">
                <div className="w-24 h-24 bg-deep-cocoa/5 rounded-full flex items-center justify-center mx-auto mb-8">
                    <span className="font-serif text-4xl font-bold text-deep-cocoa/20">404</span>
                </div>
                <h1 className="font-serif text-4xl font-bold text-deep-cocoa mb-4">
                    Cerita Terputus...
                </h1>
                <p className="text-cocoa-light mb-10 leading-relaxed">
                    Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin link sudah kedaluwarsa atau ada kesalahan penulisan alamat.
                </p>
                <Link to="/" className="btn-primary">
                    Kembali ke Beranda
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
