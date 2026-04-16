import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ServicesPage() {
  const services = [
    {
      title: "Income Tax Filing",
      description: "File your income tax returns accurately and on time with our expert guidance",
      features: ["ITR-1 to ITR-7", "Expert review", "Maximum refund", "24/7 support"],
      price: "Starting at ¥999"
    },
    {
      title: "Business Tax Solutions",
      description: "Comprehensive tax planning and compliance for businesses of all sizes",
      features: ["GST filing", "TDS compliance", "Tax planning", "Audit support"],
      price: "Custom pricing"
    },
    {
      title: "Tax Planning & Advisory",
      description: "Strategic tax planning to minimize your tax liability legally",
      features: ["Investment planning", "HRA optimization", "Deduction maximization", "Year-round support"],
      price: "Starting at ¥2,999"
    },
    {
      title: "NRI Tax Services",
      description: "Specialized tax solutions for Non-Resident Indians",
      features: ["NRI taxation", "Foreign income", "DTAA benefits", "Repatriation"],
      price: "Starting at ¥4,999"
    }
  ];

  return (
    <div className="min-h-screen bg-navy-950 font-body">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive tax solutions tailored to your needs, from individual filing to business compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-navy-900 rounded-2xl p-8 border border-white/10 hover:border-electric-500/30 transition-colors">
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-electric-400 font-semibold">{service.price}</span>
                  <button className="bg-electric-500 hover:bg-electric-600 text-white px-6 py-2 rounded-lg transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-electric-500/10 to-emerald-500/10 rounded-2xl p-8 border border-white/10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We offer tailored tax solutions for complex scenarios. Talk to our experts today.
              </p>
              <button className="bg-white hover:bg-gray-100 text-navy-950 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
