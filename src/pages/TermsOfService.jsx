import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-navy-950 font-body">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300">
              Terms and conditions governing your use of TaxSafar services
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  By accessing and using TaxSafar services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not 
                  use this service.
                </p>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Description of Service</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  TaxSafar provides online tax filing and related services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Income tax return filing</li>
                  <li>GST registration and filing</li>
                  <li>TDS return filing</li>
                  <li>Tax planning and advisory</li>
                  <li>Company and LLP registration</li>
                  <li>Tax notice support</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">User Responsibilities</h2>
              <div className="space-y-4 text-gray-300">
                <p>As a user of TaxSafar services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Update your information promptly when it changes</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use the services for lawful purposes only</li>
                  <li>Not share your account with unauthorized individuals</li>
                  <li>Comply with all applicable tax laws and regulations</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Payment Terms</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Payment for TaxSafar services is due as specified in the service agreement. 
                  We accept various payment methods and will provide invoices for all transactions.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All fees are non-refundable unless specified otherwise</li>
                  <li>Additional charges may apply for complex tax situations</li>
                  <li>Prices are subject to change with prior notice</li>
                  <li>Late payments may incur additional charges</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Confidentiality</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We maintain strict confidentiality of all client information and documents. 
                  Your financial and tax information is protected by professional ethics and legal obligations.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All information is encrypted and securely stored</li>
                  <li>Access is limited to authorized personnel only</li>
                  <li>We comply with attorney-client privilege principles</li>
                  <li>Information is shared only with your consent or as required by law</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  TaxSafar provides tax services based on information provided by clients. 
                  While we strive for accuracy, we are not liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Errors resulting from inaccurate client information</li>
                  <li>Changes in tax laws after service completion</li>
                  <li>Consequences of client decisions based on our advice</li>
                  <li>Third-party service disruptions or errors</li>
                  <li>Indirect, incidental, or consequential damages</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Service Availability</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We strive to maintain high service availability but cannot guarantee uninterrupted service. 
                  Service may be temporarily unavailable for maintenance, updates, or technical issues.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We will provide advance notice for scheduled maintenance</li>
                  <li>Emergency maintenance may be required without notice</li>
                  <li>We are not liable for service interruptions</li>
                  <li>Service availability may vary by location</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Termination</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Either party may terminate the service agreement with written notice. 
                  Upon termination, we will complete any pending work and return your documents.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>30-day notice period for termination</li>
                  <li>Immediate termination for violation of terms</li>
                  <li>Outstanding fees must be paid upon termination</li>
                  <li>Data retention policies apply after termination</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Dispute Resolution</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Any disputes arising from these terms shall be resolved through good faith negotiations. 
                  If unresolved, disputes will be subject to arbitration in Mumbai, India.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Arbitration will be conducted in English</li>
                  <li>Arbitrator decision will be final and binding</li>
                  <li>Each party bears their own legal costs</li>
                  <li>Indian courts have jurisdiction over enforcement</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  These terms of service are governed by and construed in accordance with the laws of India. 
                  Any legal action or proceeding relating to these terms will be brought exclusively in the courts of Mumbai, India.
                </p>
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
