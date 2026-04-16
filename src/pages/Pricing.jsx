import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '499',
      description: 'Perfect for individual taxpayers',
      features: [
        'ITR Filing (1)',
        'Basic tax consultation',
        'Email support',
        'Document upload',
        'Basic calculations'
      ],
      popular: false,
      buttonText: 'Get Started'
    },
    {
      name: 'Professional',
      price: '1,999',
      description: 'Ideal for professionals & businesses',
      features: [
        'ITR Filing (5)',
        'GST Registration',
        'Priority support',
        'Tax planning advice',
        'Document review',
        'Quarterly consultations',
        'Dedicated CA support'
      ],
      popular: true,
      buttonText: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: '4,999',
      description: 'Complete tax solution for companies',
      features: [
        'Unlimited ITR filings',
        'GST registration & filing',
        'Company registration',
        '24/7 phone support',
        'On-site consultations',
        'Tax audit support',
        'Legal representation',
        'Custom solutions'
      ],
      popular: false,
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <div className="min-h-screen font-body bg-mesh-animated">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your tax needs. No hidden fees, no surprises.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-navy-900/90 backdrop-blur-xl rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-electric-500/50 shadow-2xl shadow-electric-500/20' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-electric-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{'\u20b9'}</span>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">/year</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-electric-500 to-emerald-500 hover:from-electric-600 hover:to-emerald-600 text-white transform hover:scale-105'
                      : 'bg-navy-800 border border-white/20 text-white hover:bg-navy-700'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Got questions about our pricing? We've got answers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-navy-900/90 backdrop-blur-xl rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3">Can I change plans later?</h3>
              <p className="text-gray-300">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div className="bg-navy-900/90 backdrop-blur-xl rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300">
                We accept all major credit cards, debit cards, UPI, and bank transfers.
              </p>
            </div>
            <div className="bg-navy-900/90 backdrop-blur-xl rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3">Is there a money-back guarantee?</h3>
              <p className="text-gray-300">
                Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.
              </p>
            </div>
            <div className="bg-navy-900/90 backdrop-blur-xl rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3">Do you offer custom plans?</h3>
              <p className="text-gray-300">
                Yes! Contact our sales team for custom enterprise solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
