import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NoticeSupport() {
  const [formData, setFormData] = useState({
    panTan: '',
    noticeType: '',
    noticeDetails: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen font-body bg-mesh-animated">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Tax Notice Support
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional assistance for all tax department notices and queries
            </p>
          </div>

          {/* Notice Support Form */}
          <div className="bg-navy-900/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10 mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Get Notice Support</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* PAN/TAN Field */}
              <div>
                <label htmlFor="panTan" className="block text-sm font-medium text-gray-300 mb-2">
                  PAN/TAN *
                </label>
                <input
                  type="text"
                  id="panTan"
                  name="panTan"
                  value={formData.panTan}
                  onChange={handleInputChange}
                  placeholder="Enter your PAN or TAN number"
                  className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500/50 transition-colors"
                  required
                />
              </div>

              {/* Notice Type */}
              <div>
                <label htmlFor="noticeType" className="block text-sm font-medium text-gray-300 mb-2">
                  Notice Type *
                </label>
                <select
                  id="noticeType"
                  name="noticeType"
                  value={formData.noticeType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500/50 transition-colors"
                  required
                >
                  <option value="">Select notice type</option>
                  <option value="income-tax">Income Tax Notice (Section 139)</option>
                  <option value="scrutiny">Scrutiny Notice (Section 143)</option>
                  <option value="demand">Demand Notice (Section 156)</option>
                  <option value="assessment">Assessment Notice (Section 148)</option>
                  <option value="search">Search & Seizure Notice</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Notice Details */}
              <div>
                <label htmlFor="noticeDetails" className="block text-sm font-medium text-gray-300 mb-2">
                  Notice Details *
                </label>
                <textarea
                  id="noticeDetails"
                  name="noticeDetails"
                  value={formData.noticeDetails}
                  onChange={handleInputChange}
                  placeholder="Please describe your notice in detail..."
                  rows={4}
                  className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500/50 transition-colors resize-none"
                  required
                />
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500/50 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500/50 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500/50 transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-electric-500 to-emerald-500 hover:from-electric-600 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-electric-500/30"
                >
                  Submit Notice Request
                </button>
              </div>
            </form>
          </div>

          {/* Information Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-navy-900/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Types of Notices We Handle</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Income Tax Notice (Section 139)
                </li>
                <li className="flex items-start text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Scrutiny Notice (Section 143)
                </li>
                <li className="flex items-start text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Demand Notice (Section 156)
                </li>
                <li className="flex items-start text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Assessment Notice (Section 148)
                </li>
                <li className="flex items-start text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Search & Seizure Notices
                </li>
              </ul>
            </div>

            <div className="bg-navy-900/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Our Support Process</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-300">
                  <svg className="w-5 h-5 text-electric-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Notice Review & Analysis
                </li>
                <li className="flex items-start text-gray-300">
                  <svg className="w-5 h-5 text-electric-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Document Collection
                </li>
                <li className="flex items-start text-gray-300">
                  <svg className="w-5 h-5 text-electric-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Response Preparation
                </li>
                <li className="flex items-start text-gray-300">
                  <svg className="w-5 h-5 text-electric-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Representation before Authority
                </li>
                <li className="flex items-start text-gray-300">
                  <svg className="w-5 h-5 text-electric-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Appeal & Litigation Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
