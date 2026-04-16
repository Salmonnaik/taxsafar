import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Press() {
  const pressReleases = [
    {
      date: "March 15, 2024",
      title: "TaxSafar Raises $5M in Series A Funding",
      category: "Funding",
      summary: "Leading tax platform secures investment to expand services and technology."
    },
    {
      date: "February 28, 2024",
      title: "TaxSafar Helps 100,000+ Users File Taxes Successfully",
      category: "Milestone",
      summary: "Platform achieves major milestone in tax filing assistance."
    },
    {
      date: "January 10, 2024",
      title: "TaxSafar Launches AI-Powered Tax Planning Tool",
      category: "Product Launch",
      summary: "New feature helps users optimize their tax savings with artificial intelligence."
    },
    {
      date: "December 5, 2023",
      title: "TaxSafar Named Best Tax Platform 2023",
      category: "Award",
      summary: "Recognized for excellence in tax services and customer satisfaction."
    }
  ];

  return (
    <div className="min-h-screen bg-navy-950 font-body">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Press & Media
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Latest news, updates, and achievements from TaxSafar
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <div key={index} className="bg-navy-900 rounded-xl p-6 border border-white/10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-gray-400">{release.date}</span>
                        <span className="px-2 py-1 bg-electric-500/20 text-electric-400 text-xs rounded-full">
                          {release.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{release.title}</h3>
                      <p className="text-gray-300 mb-4">{release.summary}</p>
                    </div>
                  </div>
                  <button className="text-electric-400 hover:text-electric-300 font-medium">
                    Read Full Article {'->'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Media Coverage</h2>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Economic Times
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Business Standard
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  YourStory
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  TechCrunch India
                </li>
              </ul>
            </div>

            <div className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Key Statistics</h2>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  100,000+ Users Served
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  50+ Expert CAs
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  99.9% Accuracy Rate
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  4.8/5 Customer Rating
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-electric-500/10 to-emerald-500/10 rounded-2xl p-8 border border-white/10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Press Inquiries</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              For media inquiries, interviews, or press resources, please contact our PR team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-electric-500 hover:bg-electric-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact PR Team
              </button>
              <button className="bg-navy-800 hover:bg-navy-700 text-white px-8 py-3 rounded-lg font-semibold border border-white/10 transition-colors">
                Download Media Kit
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
