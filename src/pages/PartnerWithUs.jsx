import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PartnerWithUs() {
  const partnershipTypes = [
    {
      title: "CA Partner Program",
      description: "Join our network of expert CAs and expand your practice",
      benefits: ["Access to 100,000+ clients", "Technology platform", "Marketing support", "Revenue sharing"]
    },
    {
      title: "Referral Partner",
      description: "Earn commissions by referring clients to TaxSafar",
      benefits: ["Attractive commissions", "Easy tracking", "Marketing materials", "Dedicated support"]
    },
    {
      title: "Technology Partner",
      description: "Integrate your services with our platform",
      benefits: ["API access", "Co-marketing", "Revenue sharing", "Technical support"]
    },
    {
      title: "Channel Partner",
      description: "Become our authorized service partner",
      benefits: ["Exclusive territory", "Training programs", "Brand association", "Growth support"]
    }
  ];

  return (
    <div className="min-h-screen bg-navy-950 font-body">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Partner With Us
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join our growing ecosystem and help us transform tax services in India
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {partnershipTypes.map((partner, index) => (
              <div key={index} className="bg-navy-900 rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">{partner.title}</h3>
                <p className="text-gray-300 mb-4">{partner.description}</p>
                <div className="space-y-2">
                  {partner.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Why Partner With TaxSafar?</h2>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Trusted brand with 100,000+ users
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced technology platform
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Comprehensive support system
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Lucrative revenue opportunities
                </li>
              </ul>
            </div>

            <div className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Partner Success Stories</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-electric-500 pl-4">
                  <p className="text-gray-300 italic">"Partnering with TaxSafar helped me grow my practice by 300% in just one year."</p>
                  <p className="text-gray-400 text-sm mt-2">- CA Rajesh Kumar, Mumbai</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <p className="text-gray-300 italic">"The technology platform and support team make it easy to serve more clients efficiently."</p>
                  <p className="text-gray-400 text-sm mt-2">- CA Priya Sharma, Bangalore</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy-900 rounded-2xl p-8 border border-white/10 mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Partner Application</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-500/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-500/50"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-500/50"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Partnership Type</label>
                  <select className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white focus:outline-none focus:border-electric-500/50">
                    <option value="">Select partnership type</option>
                    <option value="ca">CA Partner Program</option>
                    <option value="referral">Referral Partner</option>
                    <option value="technology">Technology Partner</option>
                    <option value="channel">Channel Partner</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Tell us about your business</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-500/50"
                  placeholder="Describe your business and why you'd like to partner with us..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-electric-500 hover:bg-electric-600 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>

          <div className="bg-gradient-to-r from-electric-500/10 to-emerald-500/10 rounded-2xl p-8 border border-white/10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Grow Together?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our partner ecosystem and be part of India's tax revolution
            </p>
            <button className="bg-electric-500 hover:bg-electric-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Partnership Journey
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
