import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Security() {
  return (
    <div className="min-h-screen bg-navy-950 font-body">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Security
            </h1>
            <p className="text-xl text-gray-300">
              How we protect your data and ensure platform security
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Data Encryption</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We use industry-standard encryption to protect your sensitive information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>256-bit SSL/TLS encryption for all data transmission</li>
                  <li>AES-256 encryption for stored data</li>
                  <li>End-to-end encryption for sensitive communications</li>
                  <li>Encrypted backups with secure storage</li>
                  <li>Key management with hardware security modules</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Access Control</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Strict access controls ensure only authorized personnel can access your data:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Multi-factor authentication for all staff</li>
                  <li>Role-based access control system</li>
                  <li>Regular access reviews and audits</li>
                  <li>Principle of least privilege enforcement</li>
                  <li>Session timeout and automatic logout</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Network Security</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Our network infrastructure is protected by multiple security layers:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Next-generation firewalls with intrusion prevention</li>
                  <li>DDoS protection and traffic monitoring</li>
                  <li>Virtual private network (VPN) for remote access</li>
                  <li>Network segmentation and isolation</li>
                  <li>24/7 security monitoring and alerting</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Application Security</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We follow secure development practices to protect our applications:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Regular security code reviews</li>
                  <li>OWASP Top 10 vulnerability assessments</li>
                  <li>Static and dynamic application security testing</li>
                  <li>Secure coding guidelines and training</li>
                  <li>Patch management and security updates</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Compliance & Certifications</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We maintain compliance with industry standards and regulations:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>ISO 27001 Information Security Management</li>
                  <li>SOC 2 Type II compliance</li>
                  <li>GDPR and data protection regulations</li>
                  <li>Income Tax Act compliance requirements</li>
                  <li>Regular third-party security audits</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Incident Response</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We have a comprehensive incident response program:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>24/7 security incident monitoring</li>
                  <li>Dedicated incident response team</li>
                  <li>Regular incident response drills</li>
                  <li>Breach notification procedures</li>
                  <li>Post-incident analysis and improvements</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Your Security Responsibilities</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Help us keep your account secure by following these best practices:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use strong, unique passwords</li>
                  <li>Enable two-factor authentication</li>
                  <li>Keep your login credentials confidential</li>
                  <li>Regularly review your account activity</li>
                  <li>Report suspicious activity immediately</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Security Updates</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We continuously improve our security measures:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Regular security assessments and penetration testing</li>
                  <li>Threat intelligence monitoring</li>
                  <li>Security awareness training for staff</li>
                  <li>Infrastructure upgrades and improvements</li>
                  <li>Security policy reviews and updates</li>
                </ul>
              </div>
            </section>

            <section className="bg-navy-900 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Report Security Issues</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  If you discover a security vulnerability, please report it responsibly:
                </p>
                <ul className="space-y-2">
                  <li>Email: security@taxsafar.com</li>
                  <li>Response time: Within 24 hours</li>
                  <li>Bug bounty program available</li>
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
