import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TrackStatus() {
  const trackingSteps = [
    { status: "Document Received", completed: true, date: "2024-03-10" },
    { status: "Under Review", completed: true, date: "2024-03-12" },
    { status: "Processing", completed: true, date: "2024-03-14" },
    { status: "Quality Check", completed: false, date: "In Progress" },
    { status: "Ready for Filing", completed: false, date: "Pending" },
    { status: "Filed with Authority", completed: false, date: "Pending" }
  ];

  return (
    <div className="min-h-screen bg-navy-950 font-body">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Track Application Status
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Monitor the progress of your tax filings and applications
            </p>
          </div>

          <div className="bg-navy-900 rounded-2xl p-8 border border-white/10 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Track Your Application</h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Application ID</label>
                  <input
                    type="text"
                    placeholder="Enter your application ID"
                    className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-500/50"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-500/50"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-electric-500 hover:bg-electric-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Track Status
              </button>
            </form>
          </div>

          <div className="bg-navy-900 rounded-2xl p-8 border border-white/10 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">Application Status</h2>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full">
                In Progress
              </span>
            </div>

            <div className="space-y-4">
              {trackingSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step.completed
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-navy-800 text-gray-400'
                    }`}>
                      {step.completed ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-xs">{index + 1}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-semibold ${step.completed ? 'text-white' : 'text-gray-400'}`}>
                        {step.status}
                      </h3>
                      <span className={`text-sm ${step.completed ? 'text-gray-300' : 'text-gray-500'}`}>
                        {step.date}
                      </span>
                    </div>
                    {index < trackingSteps.length - 1 && (
                      <div className={`ml-5 mt-2 w-0.5 h-8 ${
                        step.completed ? 'bg-emerald-400' : 'bg-navy-700'
                      }`} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-navy-900 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Application Details</h3>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-gray-400">Application Type:</dt>
                  <dd className="text-white">Income Tax Return</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-400">Form Type:</dt>
                  <dd className="text-white">ITR-1</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-400">Assessment Year:</dt>
                  <dd className="text-white">2024-25</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-400">Submitted On:</dt>
                  <dd className="text-white">March 10, 2024</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-400">Expected Completion:</dt>
                  <dd className="text-white">March 20, 2024</dd>
                </div>
              </dl>
            </div>

            <div className="bg-navy-900 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-gray-400">Name:</dt>
                  <dd className="text-white">Rahul Kumar</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-400">Email:</dt>
                  <dd className="text-white">rahul@example.com</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-400">Phone:</dt>
                  <dd className="text-white">+91 98765 43210</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-400">PAN:</dt>
                  <dd className="text-white">ABCDE1234F</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-400">Assigned CA:</dt>
                  <dd className="text-white">CA Rajesh Kumar</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-navy-900 rounded-2xl p-8 border border-white/10 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Recent Updates</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-emerald-500 pl-4">
                <p className="text-gray-300">Your documents have been successfully uploaded and verified.</p>
                <p className="text-gray-500 text-sm mt-1">March 14, 2024 - 10:30 AM</p>
              </div>
              <div className="border-l-4 border-electric-500 pl-4">
                <p className="text-gray-300">Application is currently under review by our tax experts.</p>
                <p className="text-gray-500 text-sm mt-1">March 12, 2024 - 2:15 PM</p>
              </div>
              <div className="border-l-4 border-gray-600 pl-4">
                <p className="text-gray-300">We have received all required documents for your tax filing.</p>
                <p className="text-gray-500 text-sm mt-1">March 10, 2024 - 4:45 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-electric-500/10 to-emerald-500/10 rounded-2xl p-8 border border-white/10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Need Help?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                If you have any questions about your application status, our support team is here to help
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-electric-500 hover:bg-electric-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Support
                </button>
                <button className="bg-navy-800 hover:bg-navy-700 text-white px-8 py-3 rounded-lg font-semibold border border-white/10 transition-colors">
                  WhatsApp Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
