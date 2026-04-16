import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-navy-950 font-body">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About TaxSafar
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your trusted partner for seamless tax filing and financial solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To simplify tax filing for millions of Indians by providing intuitive, 
                accurate, and secure tax solutions that save time and maximize refunds.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To become India's most trusted digital tax platform, empowering every 
                taxpayer with the tools and knowledge to manage their finances confidently.
              </p>
            </div>
          </div>

          <div className="bg-navy-900 rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Certified</h3>
                <p className="text-gray-400 text-sm">Chartered accountants and tax experts review every filing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Secure & Private</h3>
                <p className="text-gray-400 text-sm">Bank-level encryption and complete data privacy</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fast & Efficient</h3>
                <p className="text-gray-400 text-sm">File your taxes in minutes, not hours</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
