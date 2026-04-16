import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ClientPortal() {
  return (
    <div className="min-h-screen bg-navy-950 font-body">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Client Portal
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Secure access to your tax documents, filings, and account information
            </p>
          </div>

          <div className="bg-navy-900 rounded-2xl p-8 border border-white/10 mb-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-electric-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-white mb-4">Login to Your Account</h2>
              <form className="max-w-md mx-auto space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-500/50"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-500/50"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center text-gray-300">
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </label>
                  <a href="#" className="text-electric-400 hover:text-electric-300 text-sm">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-electric-500 hover:bg-electric-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Login
                </button>
              </form>
            </div>

            <div className="text-center">
              <p className="text-gray-300 mb-4">
                Don't have an account?{' '}
                <a href="#" className="text-electric-400 hover:text-electric-300">
                  Sign up here
                </a>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-navy-900 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Portal Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Secure document storage
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Track filing status
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Download tax documents
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Schedule consultations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  View payment history
                </li>
              </ul>
            </div>

            <div className="bg-navy-900 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Security Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Two-factor authentication
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  End-to-end encryption
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Secure login protocols
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Activity monitoring
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Data backup & recovery
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-navy-900 rounded-2xl p-8 border border-white/10 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6">What You Can Do in the Portal</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Manage Documents</h3>
                <p className="text-gray-300 text-sm">Upload, store, and organize all your tax documents securely</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Track Applications</h3>
                <p className="text-gray-300 text-sm">Monitor status of all your tax filings and applications</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Get Updates</h3>
                <p className="text-gray-300 text-sm">Receive real-time notifications about your tax matters</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-electric-500/10 to-emerald-500/10 rounded-2xl p-8 border border-white/10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">New to TaxSafar?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Create your account to access all our tax services and features
            </p>
            <button className="bg-electric-500 hover:bg-electric-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Create Account
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
