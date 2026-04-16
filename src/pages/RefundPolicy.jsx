import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-navy-950 font-body">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Refund Policy
            </h1>
            <p className="text-xl text-gray-300">
              Our refund policy for TaxSafar services
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">General Refund Policy</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  At TaxSafar, we strive to provide excellent service and customer satisfaction. 
                  However, due to the nature of tax services, our refund policy is designed to be fair 
                  to both clients and our business.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Most tax services are non-refundable once work has begun</li>
                  <li>Refunds are considered on a case-by-case basis</li>
                  <li>Service fees are refundable only under specific conditions</li>
                  <li>Government fees and charges are non-refundable</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Refund Eligibility</h2>
              <div className="space-y-4 text-gray-300">
                <p>You may be eligible for a refund if:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service was not delivered as promised</li>
                  <li>Technical issues prevented service delivery</li>
                  <li>You cancel before work begins (minus processing fees)</li>
                  <li>Service is unavailable in your location</li>
                  <li>We fail to meet agreed-upon deadlines</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Non-Refundable Services</h2>
              <div className="space-y-4 text-gray-300">
                <p>The following services are generally non-refundable:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Completed tax return filings</li>
                  <li>Consultation services already provided</li>
                  <li>Document preparation and review</li>
                  <li>Government fees and statutory charges</li>
                  <li>Services delayed due to client information</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Refund Process</h2>
              <div className="space-y-4 text-gray-300">
                <p>To request a refund:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Contact our support team within 7 days of service completion</li>
                  <li>Provide your order details and reason for refund</li>
                  <li>Submit any supporting documentation</li>
                  <li>Wait for our review (5-7 business days)</li>
                  <li>Receive refund decision via email</li>
                </ol>
                <p>Approved refunds will be processed within 10 business days.</p>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Partial Refunds</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  In some cases, we may offer partial refunds based on the extent of work completed:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>25% refund if work is less than 25% complete</li>
                  <li>50% refund if work is less than 50% complete</li>
                  <li>75% refund if work is less than 75% complete</li>
                  <li>No refund if work is more than 75% complete</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Service Credits</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Instead of cash refunds, we may offer service credits for future use:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Credits are valid for 12 months from issue date</li>
                  <li>Can be used for any TaxSafar service</li>
                  <li>Non-transferable to other accounts</li>
                  <li>Cannot be combined with other offers</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Exceptions</h2>
              <div className="space-y-4 text-gray-300">
                <p>We may make exceptions to our refund policy in cases of:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Medical emergencies</li>
                  <li>Natural disasters</li>
                  <li>System-wide service failures</li>
                  <li>Other exceptional circumstances</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
              <div className="space-y-4 text-gray-300">
                <p>For refund inquiries, please contact:</p>
                <ul className="space-y-2">
                  <li>Email: refunds@taxsafar.com</li>
                  <li>Phone: +91 98765 43210</li>
                  <li>Hours: Monday-Friday, 9AM-6PM IST</li>
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
