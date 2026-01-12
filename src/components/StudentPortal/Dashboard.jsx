import React from 'react';
import {
  Person,
  School,
  CalendarToday,
  Assessment,
  AccountBalance,
  Notifications,
  ExitToApp,
  TrendingUp,
  Book,
  Schedule,
  Payment,
  BarChart,
  Grade,
  Event,
  LibraryBooks,
  Email,
  Phone,
  LocationOn
} from '@mui/icons-material';

const Dashboard = () => {
  // Dummy data
  const userProfile = {
    name: 'John M. Doe',
    studentId: 'STU202400123',
    program: 'BSc Computer Science',
    year: '3rd Year',
    semester: 'Semester 2, 2024',
    email: 'john.doe@university.edu',
    phone: '+1 (555) 123-4567',
    address: 'Campus Residence, Room 304'
  };

  const feeSummary = {
    totalBalance: 12500,
    paid: 87500,
    total: 100000,
    dueDate: '2024-12-31',
    status: 'Partially Paid'
  };

  const semesterProgress = {
    currentGPA: 3.75,
    targetGPA: 3.8,
    creditsTaken: 15,
    creditsRequired: 120,
    progressPercentage: 75
  };

  const upcomingEvents = [
    { id: 1, title: 'Exam Registration Deadline', date: 'Dec 10, 2024', type: 'academic' },
    { id: 2, title: 'Fee Payment Deadline', date: 'Dec 31, 2024', type: 'financial' },
    { id: 3, title: 'Final Exams Begin', date: 'Dec 15, 2024', type: 'academic' },
    { id: 4, title: 'Holiday Break', date: 'Dec 23, 2024', type: 'holiday' }
  ];

  const quickStats = [
    { title: 'Units Registered', value: '5', icon: <Book className="text-sky-600" />, change: '+2 this sem' },
    { title: 'Exams This Month', value: '3', icon: <Event className="text-sky-600" />, change: 'Scheduled' },
    { title: 'Pending Assignments', value: '2', icon: <LibraryBooks className="text-sky-600" />, change: 'Due soon' },
    { title: 'Attendance Rate', value: '94%', icon: <Schedule className="text-sky-600" />, change: '+2%' }
  ];

  const recentActivities = [
    { id: 1, action: 'Registered for CS401 - Advanced Programming', time: '2 hours ago', icon: <Book /> },
    { id: 2, action: 'Fee payment of $2,500 submitted', time: '1 day ago', icon: <Payment /> },
    { id: 3, action: 'Exam result published: MATH301 - A-', time: '2 days ago', icon: <Grade /> },
    { id: 4, action: 'Academic advising appointment scheduled', time: '3 days ago', icon: <CalendarToday /> }
  ];

  const currentSemesterCourses = [
    { code: 'CS401', name: 'Advanced Programming', instructor: 'Prof. Smith', schedule: 'Mon/Wed 9-10:30' },
    { code: 'MATH302', name: 'Calculus II', instructor: 'Dr. Johnson', schedule: 'Tue/Thu 11-12:30' },
    { code: 'PHY201', name: 'Modern Physics', instructor: 'Dr. Williams', schedule: 'Mon/Fri 2-3:30' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Profile and Notification */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Student Portal Dashboard</h1>
              <p className="text-gray-600 text-sm mt-1">Welcome back, {userProfile.name}</p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-full">
                <Notifications />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              
              {/* Profile Dropdown */}
              <div className="flex items-center space-x-3">
                <div className="hidden sm:block text-right">
                  <p className="text-sm font-medium text-gray-900">{userProfile.name}</p>
                  <p className="text-xs text-gray-500">{userProfile.studentId}</p>
                </div>
                <div className="h-10 w-10 bg-sky-100 rounded-full flex items-center justify-center">
                  <Person className="h-6 w-6 text-sky-600" />
                </div>
                <button className="flex items-center text-gray-600 hover:text-red-600 p-2">
                  <ExitToApp />
                  <span className="ml-1 hidden sm:inline">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile & Quick Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                    </div>
                    <div className="p-3 bg-sky-50 rounded-lg">
                      {stat.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Fee Balance Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-sky-50 rounded-lg">
                    <AccountBalance className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Fee Balance</h2>
                    <p className="text-sm text-gray-600">Due by {feeSummary.dueDate}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  feeSummary.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                  feeSummary.status === 'Partially Paid' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800'
                }`}>
                  {feeSummary.status}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Balance</span>
                    <span>${feeSummary.totalBalance.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-sky-600"
                      style={{ width: `${(feeSummary.paid / feeSummary.total) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Total Fees</p>
                    <p className="text-lg font-bold text-gray-900">${feeSummary.total.toLocaleString()}</p>
                  </div>
                  <div className="bg-sky-50 p-4 rounded-lg">
                    <p className="text-sm text-sky-600">Amount Paid</p>
                    <p className="text-lg font-bold text-sky-700">${feeSummary.paid.toLocaleString()}</p>
                  </div>
                </div>

                <button className="w-full bg-sky-600 text-white py-3 rounded-lg font-medium hover:bg-sky-700 transition duration-200 flex items-center justify-center">
                  <Payment className="h-5 w-5 mr-2" />
                  Pay Fees Now
                </button>
              </div>
            </div>

            {/* Semester Progress */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-sky-50 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Academic Progress</h2>
                    <p className="text-sm text-gray-600">{userProfile.program}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Current GPA</p>
                  <p className="text-2xl font-bold text-gray-900">{semesterProgress.currentGPA}</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* GPA Progress */}
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>GPA Progress (Target: {semesterProgress.targetGPA})</span>
                    <span>{semesterProgress.currentGPA}/{semesterProgress.targetGPA}</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500"
                      style={{ width: `${(semesterProgress.currentGPA / semesterProgress.targetGPA) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Credits Progress */}
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Credits Completion</span>
                    <span>{semesterProgress.creditsTaken}/{semesterProgress.creditsRequired}</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-sky-600"
                      style={{ width: `${semesterProgress.progressPercentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {semesterProgress.progressPercentage}% of credits completed
                  </p>
                </div>

                {/* Current Courses */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Current Semester Courses</h3>
                  <div className="space-y-3">
                    {currentSemesterCourses.map((course) => (
                      <div key={course.code} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{course.code} - {course.name}</p>
                          <p className="text-sm text-gray-600">{course.instructor}</p>
                        </div>
                        <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                          {course.schedule}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile, Events, Activities */}
          <div className="space-y-6">
            {/* Student Profile Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="h-24 w-24 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <School className="h-12 w-12 text-sky-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{userProfile.name}</h2>
                  <p className="text-sm text-sky-600 font-medium">{userProfile.studentId}</p>
                  <p className="text-gray-600 mt-2">{userProfile.program}</p>
                  <p className="text-sm text-gray-500">{userProfile.year} • {userProfile.semester}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Email className="h-5 w-5 mr-3 text-sky-500" />
                  <span className="text-sm">{userProfile.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3 text-sky-500" />
                  <span className="text-sm">{userProfile.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <LocationOn className="h-5 w-5 mr-3 text-sky-500" />
                  <span className="text-sm">{userProfile.address}</span>
                </div>
              </div>

              <button className="w-full mt-6 border border-sky-600 text-sky-600 py-2.5 rounded-lg font-medium hover:bg-sky-50 transition duration-200">
                Update Profile
              </button>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
                <CalendarToday className="h-5 w-5 text-gray-400" />
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{event.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{event.date}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        event.type === 'academic' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'financial' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 text-sky-600 text-sm font-medium hover:text-sky-800">
                View Full Calendar
              </button>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
                <Assessment className="h-5 w-5 text-gray-400" />
              </div>

              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="p-2 bg-sky-50 rounded-lg">
                      {React.cloneElement(activity.icon, { className: 'h-4 w-4 text-sky-600' })}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-sky-50 rounded-xl p-6 border border-sky-200">
              <h3 className="font-semibold text-sky-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-white text-sky-600 p-3 rounded-lg font-medium hover:bg-sky-100 border border-sky-200">
                  <div className="flex flex-col items-center">
                    <Book className="h-5 w-5 mb-1" />
                    <span className="text-xs">Course Registration</span>
                  </div>
                </button>
                <button className="bg-white text-sky-600 p-3 rounded-lg font-medium hover:bg-sky-100 border border-sky-200">
                  <div className="flex flex-col items-center">
                    <Event className="h-5 w-5 mb-1" />
                    <span className="text-xs">Exam Timetable</span>
                  </div>
                </button>
                <button className="bg-white text-sky-600 p-3 rounded-lg font-medium hover:bg-sky-100 border border-sky-200">
                  <div className="flex flex-col items-center">
                    <Grade className="h-5 w-5 mb-1" />
                    <span className="text-xs">View Results</span>
                  </div>
                </button>
                <button className="bg-white text-sky-600 p-3 rounded-lg font-medium hover:bg-sky-100 border border-sky-200">
                  <div className="flex flex-col items-center">
                    <BarChart className="h-5 w-5 mb-1" />
                    <span className="text-xs">Academic Report</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 px-4 sm:px-6 lg:px-8 py-4 border-t bg-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
          <div>
            <p className="text-sm text-gray-600">University Student Portal v2.0</p>
            <p className="text-xs text-gray-500 mt-1">© 2024 University Name. All rights reserved.</p>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm text-gray-600">Need help? Contact: <span className="text-sky-600">support@university.edu</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;