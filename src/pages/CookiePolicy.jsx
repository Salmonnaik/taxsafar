import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-navy-950 font-body">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300">
              How we use cookies and tracking technologies on TaxSafar
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Cookies are small text files stored on your device when you visit websites. 
                  They help us provide, protect, and improve our services.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Provide personalized content and ads</li>
                  <li>Maintain security and prevent fraud</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4 text-gray-300">
                <p>We use different types of cookies for various purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Performance Cookies:</strong> Help us understand website performance</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and choices</li>
                  <li><strong>Targeting Cookies:</strong> Used for advertising and personalization</li>
                  <li><strong>Security Cookies:</strong> Help protect against security threats</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Cookie Purposes</h2>
              <div className="space-y-4 text-gray-300">
                <p>We use cookies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Keep you logged in to your account</li>
                  <li>Remember your language and region preferences</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Personalize your experience with relevant content</li>
                  <li>Measure advertising effectiveness</li>
                  <li>Detect and prevent fraudulent activities</li>
                  <li>Improve website performance and features</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Cookies</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We work with trusted third-party services that may place cookies on your device:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> Website analytics and user behavior</li>
                  <li><strong>Google Ads:</strong> Advertising and remarketing</li>
                  <li><strong>Facebook Pixel:</strong> Social media advertising</li>
                  <li><strong>Payment Processors:</strong> Secure payment processing</li>
                  <li><strong>Customer Support Tools:</strong> Live chat and support services</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Cookie Duration</h2>
              <div className="space-y-4 text-gray-300">
                <p>Cookies have different lifespans:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain on your device for a set period</li>
                  <li><strong>Authentication Cookies:</strong> Usually last 30 days</li>
                  <li><strong>Analytics Cookies:</strong> Typically last 2 years</li>
                  <li><strong>Advertising Cookies:</strong> May last up to 1 year</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Managing Cookies</h2>
              <div className="space-y-4 text-gray-300">
                <p>You can control cookies through:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Browser settings to block or delete cookies</li>
                  <li>Our cookie consent banner preferences</li>
                  <li>Privacy settings on your device</li>
                  <li>Opt-out tools for advertising cookies</li>
                  <li>Do Not Track browser settings</li>
                </ul>
                <p>
                  Note: Blocking essential cookies may affect website functionality.
                </p>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Your Choices</h2>
              <div className="space-y-4 text-gray-300">
                <p>You have several options regarding cookies:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Accept all cookies for the best experience</li>
                  <li>Accept only essential cookies</li>
                  <li>Customize your cookie preferences</li>
                  <li>Opt out of targeted advertising</li>
                  <li>Delete existing cookies from your browser</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Cookie Updates</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We may update this cookie policy to reflect changes in our practices or 
                  applicable law. We will notify you of significant changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Posting the updated policy on our website</li>
                  <li>Displaying a notice on our homepage</li>
                  <li>Sending email notifications for major changes</li>
                  <li>Updating the effective date at the top of this policy</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  If you have questions about our cookie policy, please contact us:
                </p>
                <ul className="space-y-2">
                  <li>Email: privacy@taxsafar.com</li>
                  <li>Phone: +91 98765 43210</li>
                  <li>Address: 123 Business Park, Mumbai 400001</li>
                </ul>
                <p className="text-sm text-gray-400">
                  Last updated: March 15, 2024
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
