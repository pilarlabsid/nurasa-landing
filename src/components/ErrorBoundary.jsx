import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-warm-cream flex items-center justify-center p-5">
          <div className="bg-ivory rounded-2xl p-8 max-w-md w-full shadow-2xl text-center border border-deep-cocoa/10">
            <div className="w-16 h-16 bg-accent-red/10 text-accent-red rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-deep-cocoa mb-3">Ups! Terjadi Kesalahan</h2>
            <p className="text-cocoa-light text-sm mb-8">Maaf, ada sesuatu yang berjalan tidak semestinya di halaman ini. Silakan muat ulang halaman.</p>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-deep-cocoa text-ivory py-3 rounded-xl font-bold hover:bg-accent-amber transition-colors shadow-lg"
            >
              Muat Ulang Halaman
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
