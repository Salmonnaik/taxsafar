import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function OurCAs() {
  const teamMembers = [
    {
      name: "CA Rajesh Kumar",
      qualification: "Chartered Accountant",
      experience: "15+ years",
      expertise: "Income Tax, GST, Corporate Tax",
      image: "/api/placeholder/300/300"
    },
    {
      name: "CA Priya Sharma",
      qualification: "Chartered Accountant",
      experience: "12+ years", 
      expertise: "International Taxation, Transfer Pricing",
      image: "/api/placeholder/300/300"
    },
    {
      name: "CA Amit Patel",
      qualification: "Chartered Accountant",
      experience: "10+ years",
      expertise: "Tax Planning, Wealth Management",
      image: "/api/placeholder/300/300"
    },
    {
      name: "CA Neha Gupta",
      qualification: "Chartered Accountant",
      experience: "8+ years",
      expertise: "GST, TDS, Tax Litigation",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <div className="min-h-screen bg-navy-950 font-body">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Expert Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet our highly qualified and experienced Chartered Accountants dedicated to your tax success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-navy-900 rounded-2xl p-6 border border-white/10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-electric-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-electric-400 text-sm mb-2">{member.qualification}</p>
                <p className="text-gray-400 text-sm mb-3">{member.experience} experience</p>
                <p className="text-gray-300 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Why Trust Our CAs?</h2>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  ICAI certified professionals
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  10,000+ tax returns filed
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  99.9% accuracy rate
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Regular tax law updates
                </li>
              </ul>
            </div>

            <div className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Our Expertise</h2>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Direct & Indirect Taxation
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  International Taxation
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Tax Compliance & Audit
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-electric-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Tax Representation
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-electric-500/10 to-emerald-500/10 rounded-2xl p-8 border border-white/10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Consult Our Tax Experts</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get personalized tax advice from our experienced Chartered Accountants
            </p>
            <button className="bg-electric-500 hover:bg-electric-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
