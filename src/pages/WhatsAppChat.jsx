import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WhatsAppChat() {
  return (
    <div className="min-h-screen bg-navy-950 font-body">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              WhatsApp Support
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get instant support through WhatsApp for quick tax assistance
            </p>
          </div>

          <div className="bg-navy-900 rounded-2xl p-8 border border-white/10 mb-8">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Chat with Our Tax Experts</h2>
              <p className="text-gray-300 mb-6">
                Get instant answers to your tax questions on WhatsApp
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Start WhatsApp Chat
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Available Services</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Quick tax queries
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Document checklist
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Filing status updates
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Appointment scheduling
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Support Hours</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Response Time</span>
                    <span>Within 5 minutes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-navy-900 rounded-2xl p-8 border border-white/10 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6">How to Use WhatsApp Support</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-400 font-bold">1</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Save Number</h3>
                <p className="text-gray-300 text-sm">Save our WhatsApp number +91 98765 43210</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-400 font-bold">2</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Send Message</h3>
                <p className="text-gray-300 text-sm">Start with "Hi" or describe your query</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-400 font-bold">3</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Get Response</h3>
                <p className="text-gray-300 text-sm">Our experts respond within 5 minutes</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-400 font-bold">4</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Resolve Query</h3>
                <p className="text-gray-300 text-sm">Get your tax questions answered quickly</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-white/10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need Urgent Help?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              For urgent tax matters, call us directly at +91 98765 43210
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Call Now
              </button>
              <button className="bg-electric-500 hover:bg-electric-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Email Support
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
