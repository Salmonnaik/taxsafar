import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HelpCenter() {
  const helpCategories = [
    {
      title: "Getting Started",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      articles: [
        "How to create an account",
        "Account verification process",
        "Dashboard overview",
        "Profile setup guide"
      ]
    },
    {
      title: "Tax Filing",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      articles: [
        "ITR filing guide",
        "Document requirements",
        "Common filing mistakes",
        "Status tracking"
      ]
    },
    {
      title: "GST Services",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
      articles: [
        "GST registration process",
        "GST return filing",
        "GST compliance guide",
        "Input tax credit"
      ]
    },
    {
      title: "Account & Billing",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
      articles: [
        "Subscription management",
        "Payment methods",
        "Invoice history",
        "Refund requests"
      ]
    },
    {
      title: "Technical Support",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      articles: [
        "Browser compatibility",
        "Login issues",
        "Document upload problems",
        "System requirements"
      ]
    },
    {
      title: "Legal & Compliance",
      icon: "M10.525 3.25a3.375 3.375 0 00-5.825 0l-5.586 9.675a3.375 3.375 0 002.912 5.05h11.623a3.375 3.375 0 002.913-5.05l-5.587-9.675z",
      articles: [
        "Privacy policy questions",
        "Data security",
        "Terms of service",
        "Legal compliance"
      ]
    }
  ];

  const popularArticles = [
    "How to file ITR-1 for salaried employees",
    "GST registration step-by-step guide",
    "Document checklist for tax filing",
    "How to track your tax return status",
    "Understanding tax deductions under 80C",
    "Common tax filing mistakes to avoid"
  ];

  return (
    <div className="min-h-screen bg-navy-950 font-body">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Help Center
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find answers to your questions and get the support you need
            </p>
          </div>

          <div className="mb-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  className="w-full px-6 py-4 bg-navy-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-electric-500/50 pl-12"
                />
                <svg className="absolute left-4 top-4 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {helpCategories.map((category, index) => (
              <div key={index} className="bg-navy-900 rounded-2xl p-6 border border-white/10 hover:border-electric-500/30 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-electric-500/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.articles.map((article, idx) => (
                    <li key={idx} className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                      {article}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-6">Popular Articles</h2>
              <ul className="space-y-4">
                {popularArticles.map((article, index) => (
                  <li key={index} className="flex items-center text-gray-300 hover:text-white cursor-pointer transition-colors">
                    <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {article}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <button className="w-full bg-electric-500 hover:bg-electric-600 text-white py-3 rounded-lg font-semibold transition-colors">
                  Contact Support
                </button>
                <button className="w-full bg-navy-800 hover:bg-navy-700 text-white py-3 rounded-lg font-semibold border border-white/10 transition-colors">
                  Track Your Request
                </button>
                <button className="w-full bg-navy-800 hover:bg-navy-700 text-white py-3 rounded-lg font-semibold border border-white/10 transition-colors">
                  Schedule Consultation
                </button>
                <button className="w-full bg-navy-800 hover:bg-navy-700 text-white py-3 rounded-lg font-semibold border border-white/10 transition-colors">
                  Video Tutorials
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-electric-500/10 to-emerald-500/10 rounded-2xl p-8 border border-white/10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our support team is available 24/7 to assist you with any questions or issues
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-electric-500 hover:bg-electric-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Live Chat
                </button>
                <button className="bg-navy-800 hover:bg-navy-700 text-white px-8 py-3 rounded-lg font-semibold border border-white/10 transition-colors">
                  Email Support
                </button>
                <button className="bg-navy-800 hover:bg-navy-700 text-white px-8 py-3 rounded-lg font-semibold border border-white/10 transition-colors">
                  Call Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
