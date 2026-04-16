import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TaxAdvisory() {
  return (
    <div className="min-h-screen bg-navy-950 font-body">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Tax Advisory Services
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expert tax planning and advisory to optimize your tax liability legally
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Our Advisory Services</h2>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tax Planning & Structuring
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  International Taxation
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Transfer Pricing
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tax Litigation Support
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  M&A Tax Advisory
                </li>
              </ul>
            </div>

            <div className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Tax Optimization Areas</h2>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  Section 80C Deductions
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  HRA & House Property Benefits
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  Business Expense Optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  Investment Tax Planning
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  Wealth Tax Management
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-electric-500/10 to-emerald-500/10 rounded-2xl p-8 border border-white/10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Optimize Your Tax Strategy</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get personalized tax advice from our expert chartered accountants
            </p>
            <button className="bg-electric-500 hover:bg-electric-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Consult Tax Expert
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
