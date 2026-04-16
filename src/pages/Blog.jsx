import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog() {
  const blogPosts = [
    {
      title: "Complete Guide to ITR Filing for FY 2023-24",
      excerpt: "Everything you need to know about filing your income tax return for the current financial year.",
      category: "Tax Filing",
      date: "March 10, 2024",
      readTime: "5 min read"
    },
    {
      title: "Tax Saving Tips for Salaried Employees",
      excerpt: "Maximize your tax savings with these smart investment and deduction strategies.",
      category: "Tax Planning",
      date: "March 5, 2024",
      readTime: "7 min read"
    },
    {
      title: "Understanding GST Compliance for Small Businesses",
      excerpt: "A comprehensive guide to GST registration, filing, and compliance requirements.",
      category: "GST",
      date: "February 28, 2024",
      readTime: "6 min read"
    },
    {
      title: "Common Tax Mistakes to Avoid This Year",
      excerpt: "Learn about the most common tax filing errors and how to avoid them.",
      category: "Tax Tips",
      date: "February 20, 2024",
      readTime: "4 min read"
    },
    {
      title: "New Tax Regime vs Old Tax Regime: Which to Choose?",
      excerpt: "A detailed comparison to help you decide between the new and old tax regimes.",
      category: "Tax Planning",
      date: "February 15, 2024",
      readTime: "8 min read"
    },
    {
      title: "TDS Deduction Rules Explained",
      excerpt: "Understanding TDS rates, thresholds, and compliance requirements.",
      category: "TDS",
      date: "February 10, 2024",
      readTime: "5 min read"
    }
  ];

  const categories = ["All", "Tax Filing", "Tax Planning", "GST", "TDS", "Tax Tips"];

  return (
    <div className="min-h-screen bg-navy-950 font-body">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Tax Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expert insights, tips, and guides to help you navigate the world of taxes
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-electric-500 text-white'
                      : 'bg-navy-900 text-gray-300 border border-white/10 hover:bg-navy-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-navy-900 rounded-2xl p-6 border border-white/10 hover:border-electric-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-electric-500/20 text-electric-400 text-xs rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{post.date}</span>
                  <button className="text-electric-400 hover:text-electric-300 font-medium text-sm">
                    Read More {'->'}
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Popular Topics</h2>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Income Tax Slabs
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Section 80C Deductions
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  HRA Calculation
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Capital Gains Tax
                </li>
              </ul>
            </div>

            <div className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Newsletter</h2>
              <p className="text-gray-300 mb-4">
                Get the latest tax tips and updates delivered to your inbox
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-500/50"
                />
                <button className="w-full bg-electric-500 hover:bg-electric-600 text-white py-3 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-electric-500/10 to-emerald-500/10 rounded-2xl p-8 border border-white/10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Informed</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Follow our blog for the latest tax news, tips, and expert advice
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-navy-800 hover:bg-navy-700 text-white px-6 py-3 rounded-lg border border-white/10 transition-colors">
                All Articles
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
