import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-navy-950 font-body">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name, email address, phone number</li>
                  <li>PAN card details and tax-related information</li>
                  <li>Financial information for tax filing</li>
                  <li>Government-issued identification documents</li>
                  <li>Communication data and support requests</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <div className="space-y-4 text-gray-300">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and maintain our tax services</li>
                  <li>Process tax returns and related documents</li>
                  <li>Communicate with you about your account and services</li>
                  <li>Offer customer support and respond to inquiries</li>
                  <li>Improve our services and develop new features</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>256-bit SSL encryption for data transmission</li>
                  <li>Secure servers with restricted access</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Employee training on data protection</li>
                  <li>Compliance with data protection regulations</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To tax authorities as required by law</li>
                  <li>With service providers who assist in our operations</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <div className="space-y-4 text-gray-300">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your account and data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>Restrict processing of your information</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Cookies and Tracking</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience, 
                  analyze site usage, and provide personalized content.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Essential cookies for site functionality</li>
                  <li>Analytics cookies to understand user behavior</li>
                  <li>Marketing cookies for personalized advertising</li>
                  <li>You can control cookies through your browser settings</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Policy Updates</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We may update this privacy policy from time to time. We will notify you of any 
                  significant changes by posting the new policy on our website and sending you an email notification.
                </p>
                <p className="text-sm text-gray-400">
                  Last updated: March 15, 2024
                </p>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <ul className="space-y-2">
                  <li>Email: privacy@taxsafar.com</li>
                  <li>Phone: +91 98765 43210</li>
                  <li>Address: 123 Business Park, Mumbai 400001</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
