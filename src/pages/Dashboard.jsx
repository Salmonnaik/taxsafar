import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Dashboard() {
  const stats = [
    { label: "Tax Returns Filed", value: "12", change: "+2 this year" },
    { label: "Total Refunds", value: "¥45,280", change: "+¥8,420" },
    { label: "Tax Saved", value: "¥18,650", change: "+¥3,200" },
    { label: "Documents", value: "48", change: "+12 new" }
  ];

  const recentActivities = [
    { date: "2024-03-15", action: "ITR-2023-24 filed", status: "Completed" },
    { date: "2024-03-10", action: "Form 16 uploaded", status: "Completed" },
    { date: "2024-03-05", action: "Tax planning session", status: "Scheduled" },
    { date: "2024-02-28", action: "Document verification", status: "In Progress" }
  ];

  return (
    <div className="min-h-screen bg-navy-950 font-body">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Rahul!</h1>
            <p className="text-gray-300">Here's your tax dashboard overview</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-navy-900 rounded-xl p-6 border border-white/10">
                <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-emerald-400 text-sm">{stat.change}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-navy-900 rounded-2xl p-6 border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-4">Recent Activities</h2>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          activity.status === 'Completed' ? 'bg-emerald-400' : 
                          activity.status === 'Scheduled' ? 'bg-blue-400' : 'bg-yellow-400'
                        }`} />
                        <div>
                          <p className="text-white font-medium">{activity.action}</p>
                          <p className="text-gray-400 text-sm">{activity.date}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        activity.status === 'Completed' ? 'bg-emerald-400/20 text-emerald-400' : 
                        activity.status === 'Scheduled' ? 'bg-blue-400/20 text-blue-400' : 'bg-yellow-400/20 text-yellow-400'
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-navy-900 rounded-2xl p-6 border border-white/10 mb-6">
                <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full bg-electric-500 hover:bg-electric-600 text-white py-3 rounded-lg transition-colors">
                    File New Return
                  </button>
                  <button className="w-full bg-navy-800 hover:bg-navy-700 text-white py-3 rounded-lg border border-white/10 transition-colors">
                    Upload Documents
                  </button>
                  <button className="w-full bg-navy-800 hover:bg-navy-700 text-white py-3 rounded-lg border border-white/10 transition-colors">
                    Tax Calculator
                  </button>
                  <button className="w-full bg-navy-800 hover:bg-navy-700 text-white py-3 rounded-lg border border-white/10 transition-colors">
                    Schedule Consultation
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-electric-500/10 to-emerald-500/10 rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Tax Season Reminder</h3>
                <p className="text-gray-300 text-sm mb-3">
                  File your FY 2023-24 return before July 31st to avoid penalties
                </p>
                <div className="bg-navy-800 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-electric-400 mb-1">45 days left</p>
                  <p className="text-gray-400 text-sm">Deadline: July 31, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
