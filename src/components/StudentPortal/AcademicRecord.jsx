/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  School,
  Book,
  CalendarToday,
  TrendingUp,
  BarChart,
  AddCircle,
  RemoveCircle,
  CheckCircle,
  Schedule,
  Grade,
  Download,
  Print,
  FilterList,
  Search,
  ChevronRight,
  ChevronLeft,
  Assessment,
  LibraryBooks,
  Person,
  Warning,
  Info,
  ExpandMore,
  ExpandLess,
  Receipt,
  Payment,
  History,
  Assignment
} from '@mui/icons-material';

const Academic = () => {
  const [selectedSemester, setSelectedSemester] = useState('Semester 2, 2024');
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [activeTab, setActiveTab] = useState('registration');
  const [expandedUnit, setExpandedUnit] = useState(null);

  // Dummy data
  const studentInfo = {
    name: 'John M. Doe',
    studentId: 'STU202400123',
    program: 'BSc Computer Science',
    year: '3rd Year',
    currentSemester: 'Semester 2, 2024',
    academicYear: '2024/2025',
    advisor: 'Prof. Sarah Johnson',
    advisorEmail: 's.johnson@university.edu',
    advisorPhone: 'Ext. 4567'
  };

  const semesterData = [
    { id: 1, name: 'Semester 2, 2024', gpa: 3.75, credits: 15, status: 'In Progress', startDate: '2024-09-01', endDate: '2024-12-31' },
    { id: 2, name: 'Semester 1, 2024', gpa: 3.68, credits: 18, status: 'Completed', startDate: '2024-01-15', endDate: '2024-05-30' },
    { id: 3, name: 'Semester 2, 2023', gpa: 3.52, credits: 15, status: 'Completed', startDate: '2023-09-01', endDate: '2023-12-31' },
    { id: 4, name: 'Semester 1, 2023', gpa: 3.45, credits: 18, status: 'Completed', startDate: '2023-01-15', endDate: '2023-05-30' },
  ];

  const unitProgress = {
    'Semester 2, 2024': [
      { code: 'CS401', name: 'Advanced Programming', credits: 3, grade: 'A-', status: 'In Progress', instructor: 'Prof. Smith', schedule: 'Mon/Wed 9:00-10:30 AM', attendance: '94%' },
      { code: 'MATH302', name: 'Calculus II', credits: 4, grade: 'B+', status: 'In Progress', instructor: 'Dr. Johnson', schedule: 'Tue/Thu 11:00-12:30 PM', attendance: '89%' },
      { code: 'PHY201', name: 'Modern Physics', credits: 3, grade: 'A', status: 'In Progress', instructor: 'Dr. Williams', schedule: 'Mon/Fri 2:00-3:30 PM', attendance: '96%' },
      { code: 'ENG301', name: 'Technical Writing', credits: 3, grade: 'A-', status: 'In Progress', instructor: 'Prof. Davis', schedule: 'Wed 1:00-4:00 PM', attendance: '92%' },
      { code: 'CS302', name: 'Data Structures', credits: 4, grade: 'A', status: 'In Progress', instructor: 'Prof. Brown', schedule: 'Thu 9:00-12:00 PM', attendance: '98%' },
    ],
    'Semester 1, 2024': [
      { code: 'CS301', name: 'Algorithms', credits: 4, grade: 'A-', status: 'Completed', instructor: 'Prof. Smith', schedule: 'Mon/Wed 10:00-11:30 AM', attendance: '91%' },
      { code: 'MATH301', name: 'Calculus I', credits: 4, grade: 'B', status: 'Completed', instructor: 'Dr. Johnson', schedule: 'Tue/Thu 9:00-10:30 AM', attendance: '87%' },
      { code: 'PHY101', name: 'Physics I', credits: 3, grade: 'A', status: 'Completed', instructor: 'Dr. Williams', schedule: 'Mon/Fri 1:00-2:30 PM', attendance: '93%' },
      { code: 'ENG201', name: 'Academic Writing', credits: 3, grade: 'B+', status: 'Completed', instructor: 'Prof. Davis', schedule: 'Wed 2:00-5:00 PM', attendance: '90%' },
      { code: 'CS201', name: 'OOP Concepts', credits: 4, grade: 'A', status: 'Completed', instructor: 'Prof. Brown', schedule: 'Thu 10:00-1:00 PM', attendance: '95%' },
    ]
  };

  const availableUnits = [
    { id: 1, code: 'CS402', name: 'Machine Learning', credits: 4, schedule: 'Mon/Wed 10:00-11:30 AM', seats: '15/30', prerequisite: 'CS301', description: 'Introduction to machine learning algorithms and applications.', department: 'Computer Science', fee: 1200 },
    { id: 2, code: 'CS403', name: 'Database Systems', credits: 4, schedule: 'Tue/Thu 2:00-3:30 PM', seats: '22/30', prerequisite: 'CS201', description: 'Design and implementation of database systems.', department: 'Computer Science', fee: 1100 },
    { id: 3, code: 'MATH401', name: 'Linear Algebra', credits: 4, schedule: 'Mon/Fri 9:00-10:30 AM', seats: '10/30', prerequisite: 'MATH302', description: 'Advanced topics in linear algebra.', department: 'Mathematics', fee: 1000 },
    { id: 4, code: 'PHY301', name: 'Quantum Physics', credits: 3, schedule: 'Wed/Fri 1:00-2:30 PM', seats: '18/25', prerequisite: 'PHY201', description: 'Introduction to quantum mechanics.', department: 'Physics', fee: 900 },
    { id: 5, code: 'CS404', name: 'Software Engineering', credits: 3, schedule: 'Tue/Thu 4:00-5:30 PM', seats: '20/30', prerequisite: 'CS301', description: 'Software development methodologies and practices.', department: 'Computer Science', fee: 1150 },
    { id: 6, code: 'ENG401', name: 'Professional Communication', credits: 3, schedule: 'Mon 1:00-4:00 PM', seats: '25/30', prerequisite: 'ENG301', description: 'Advanced communication skills for professionals.', department: 'English', fee: 850 },
  ];

  const registeredUnits = [
    { id: 1, code: 'CS401', name: 'Advanced Programming', credits: 3, schedule: 'Mon/Wed 9:00-10:30 AM', status: 'Approved', registrationDate: '2024-08-15', fee: 1100, feeStatus: 'Paid' },
    { id: 2, code: 'MATH302', name: 'Calculus II', credits: 4, schedule: 'Tue/Thu 11:00-12:30 PM', status: 'Approved', registrationDate: '2024-08-15', fee: 1200, feeStatus: 'Paid' },
    { id: 3, code: 'PHY201', name: 'Modern Physics', credits: 3, schedule: 'Mon/Fri 2:00-3:30 PM', status: 'Approved', registrationDate: '2024-08-20', fee: 1000, feeStatus: 'Paid' },
    { id: 4, code: 'ENG301', name: 'Technical Writing', credits: 3, schedule: 'Wed 1:00-4:00 PM', status: 'Approved', registrationDate: '2024-08-20', fee: 900, feeStatus: 'Paid' },
    { id: 5, code: 'CS302', name: 'Data Structures', credits: 4, schedule: 'Thu 9:00-12:00 PM', status: 'Approved', registrationDate: '2024-08-22', fee: 1150, feeStatus: 'Paid' },
  ];

  const academicRequirements = {
    totalCreditsRequired: 120,
    creditsCompleted: 90,
    creditsRemaining: 30,
    requiredGPA: 2.0,
    currentGPA: 3.60,
    coreUnitsRequired: 15,
    coreUnitsCompleted: 12,
    electiveUnitsRequired: 10,
    electiveUnitsCompleted: 8
  };

  const academicCalendar = [
    { id: 1, event: 'Unit Registration Opens', date: 'Aug 01, 2024', status: 'Completed' },
    { id: 2, event: 'Add/Drop Period', date: 'Aug 01 - Aug 30, 2024', status: 'Completed' },
    { id: 3, event: 'Late Registration (with penalty)', date: 'Sep 01 - Sep 15, 2024', status: 'Completed' },
    { id: 4, event: 'Mid-Semester Exams', date: 'Oct 15 - Oct 25, 2024', status: 'Completed' },
    { id: 5, event: 'Withdrawal Deadline', date: 'Nov 01, 2024', status: 'Upcoming' },
    { id: 6, event: 'Final Exam Registration', date: 'Nov 15 - Nov 30, 2024', status: 'Upcoming' },
    { id: 7, event: 'Final Exams', date: 'Dec 15 - Dec 22, 2024', status: 'Upcoming' },
  ];

  const handleUnitSelect = (unit) => {
    setSelectedUnit(selectedUnit?.id === unit.id ? null : unit);
  };

  const handleUnitRegistration = (unit) => {
    alert(`Successfully registered for ${unit.code} - ${unit.name}`);
    setSelectedUnit(null);
  };

  const handleUnitRemove = (unitId) => {
    alert(`Removed unit registration`);
  };

  const toggleUnitDetails = (unitId) => {
    setExpandedUnit(expandedUnit === unitId ? null : unitId);
  };

  const tabs = [
    { id: 'registration', label: 'Unit Registration', icon: <AddCircle /> },
    { id: 'progress', label: 'Academic Progress', icon: <TrendingUp /> },
    { id: 'requirements', label: 'Degree Requirements', icon: <BarChart /> },
    { id: 'calendar', label: 'Academic Calendar', icon: <CalendarToday /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'registration':
        return (
          <div className="space-y-6">
            {/* Registration Header */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Unit Registration - {studentInfo.currentSemester}</h2>
                  <p className="text-gray-600 mt-2">Register for units for the upcoming semester</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="bg-sky-50 p-4 rounded-lg">
                    <p className="text-sm text-sky-600">Registration Status</p>
                    <p className="text-lg font-bold text-gray-900">Open</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-600">Units Registered</p>
                    <p className="text-lg font-bold text-gray-900">{registeredUnits.length}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Available Units */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-sky-50 rounded-lg">
                        <Book className="h-6 w-6 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Available Units</h3>
                        <p className="text-sm text-gray-600">Select units to register for</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search units..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                      <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <FilterList className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {availableUnits.map((unit) => (
                      <div 
                        key={unit.id}
                        className={`border rounded-lg transition-all duration-200 ${
                          selectedUnit?.id === unit.id 
                            ? 'border-sky-500 bg-sky-50' 
                            : 'border-gray-200 hover:border-sky-300 hover:bg-sky-50'
                        }`}
                      >
                        <div className="p-4 cursor-pointer" onClick={() => toggleUnitDetails(unit.id)}>
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center space-x-3">
                                <h4 className="font-bold text-gray-900">{unit.code}</h4>
                                <span className="text-sm text-gray-500">{unit.department}</span>
                              </div>
                              <p className="text-gray-900 mt-1">{unit.name}</p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                  {unit.credits} Credits
                                </span>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                  {unit.schedule}
                                </span>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  parseInt(unit.seats.split('/')[0]) < 10 
                                    ? 'bg-red-100 text-red-800' 
                                    : 'bg-green-100 text-green-800'
                                }`}>
                                  {unit.seats} seats
                                </span>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  Fee: ${unit.fee}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {selectedUnit?.id === unit.id ? (
                                <ExpandLess className="h-5 w-5 text-sky-600" />
                              ) : (
                                <ExpandMore className="h-5 w-5 text-gray-400" />
                              )}
                            </div>
                          </div>

                          {expandedUnit === unit.id && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <p className="text-sm text-gray-600">{unit.description}</p>
                              <div className="mt-3 flex items-center text-sm text-gray-500">
                                <Warning className="h-4 w-4 mr-1" />
                                <span>Prerequisite: {unit.prerequisite}</span>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleUnitSelect(unit);
                                }}
                                className="mt-4 w-full sm:w-auto bg-sky-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-sky-700"
                              >
                                Select Unit
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Registration Panel */}
              <div className="space-y-6">
                {/* Selected Unit */}
                {selectedUnit && (
                  <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-sky-500">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-bold text-gray-900">{selectedUnit.code}</h3>
                        <p className="text-sm text-gray-600">{selectedUnit.name}</p>
                      </div>
                      <button 
                        onClick={() => setSelectedUnit(null)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        ×
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-sky-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-sky-900">Registration Details</p>
                        <div className="mt-3 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Credits:</span>
                            <span className="font-medium">{selectedUnit.credits}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Fee:</span>
                            <span className="font-medium">${selectedUnit.fee}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Schedule:</span>
                            <span className="font-medium text-right">{selectedUnit.schedule}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Prerequisite:</span>
                            <span className="font-medium">{selectedUnit.prerequisite}</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleUnitRegistration(selectedUnit)}
                        className="w-full bg-sky-600 text-white py-3 rounded-lg font-medium hover:bg-sky-700 transition duration-200 flex items-center justify-center"
                      >
                        <AddCircle className="h-5 w-5 mr-2" />
                        Register Unit
                      </button>
                    </div>
                  </div>
                )}

                {/* Registered Units Summary */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Registered Units</h3>
                        <p className="text-sm text-gray-600">{registeredUnits.length} units</p>
                      </div>
                    </div>
                    <span className="text-sm text-sky-600 font-medium">Total: {registeredUnits.reduce((sum, unit) => sum + unit.credits, 0)} Credits</span>
                  </div>

                  <div className="space-y-3">
                    {registeredUnits.map((unit) => (
                      <div key={unit.id} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-900">{unit.code}</p>
                            <p className="text-sm text-gray-600">{unit.name}</p>
                            <div className="flex items-center mt-2 space-x-2">
                              <span className="text-xs text-gray-500">{unit.schedule}</span>
                              <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                                {unit.status}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => handleUnitRemove(unit.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <RemoveCircle />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Total Fees:</span>
                      <span className="font-bold text-gray-900">
                        ${registeredUnits.reduce((sum, unit) => sum + unit.fee, 0).toLocaleString()}
                      </span>
                    </div>
                    <button className="w-full mt-4 border border-sky-600 text-sky-600 py-2.5 rounded-lg font-medium hover:bg-sky-50">
                      View Registration Receipt
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'progress':
        return (
          <div className="space-y-6">
            {/* Progress Header */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-sky-50 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Academic Progress</h2>
                    <p className="text-gray-600">Track your academic performance and progress</p>
                  </div>
                </div>
                <select 
                  className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                >
                  {semesterData.map((sem) => (
                    <option key={sem.id} value={sem.name}>{sem.name}</option>
                  ))}
                </select>
              </div>

              {/* Semester Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-6">
                {semesterData.filter(s => s.name === selectedSemester).map((sem) => (
                  <React.Fragment key={sem.id}>
                    <div className="bg-sky-50 p-4 rounded-lg">
                      <p className="text-sm text-sky-600">Semester GPA</p>
                      <p className="text-2xl font-bold text-gray-900">{sem.gpa}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {sem.status === 'In Progress' ? 'Current' : 'Final'}
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-600">Credits</p>
                      <p className="text-2xl font-bold text-gray-900">{sem.credits}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm text-purple-600">Status</p>
                      <p className="text-lg font-bold text-gray-900">{sem.status}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Period</p>
                      <p className="text-sm font-bold text-gray-900">
                        {sem.startDate} to {sem.endDate}
                      </p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Units Progress Table */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Details</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {unitProgress[selectedSemester]?.map((unit) => (
                      <tr key={unit.code} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="flex items-center space-x-3">
                              <div className="flex-shrink-0 h-10 w-10 bg-sky-100 rounded-lg flex items-center justify-center">
                                <Book className="h-5 w-5 text-sky-600" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">{unit.code}</div>
                                <div className="text-sm text-gray-500">{unit.name}</div>
                                <div className="text-xs text-gray-400 mt-1">{unit.instructor}</div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{unit.credits}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full
                            ${unit.grade === 'A' ? 'bg-green-100 text-green-800' :
                              unit.grade === 'A-' ? 'bg-green-50 text-green-700' :
                              unit.grade === 'B+' ? 'bg-blue-100 text-blue-800' :
                              unit.grade === 'B' ? 'bg-blue-50 text-blue-700' :
                              'bg-yellow-100 text-yellow-800'}`}>
                            {unit.grade}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-green-600 h-2 rounded-full" 
                                style={{ width: unit.attendance }}
                              ></div>
                            </div>
                            <span className="ml-2 text-sm text-gray-600">{unit.attendance}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${unit.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {unit.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-sky-600 hover:text-sky-900 mr-3">
                            <Grade className="h-4 w-4 inline mr-1" />
                            View
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            <Download className="h-4 w-4 inline mr-1" />
                            Download
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Overall Progress */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Cumulative Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Overall GPA Progress</span>
                      <span>{academicRequirements.currentGPA}/4.0</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-sky-600"
                        style={{ width: `${(academicRequirements.currentGPA / 4) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Credits Completion</span>
                      <span>{academicRequirements.creditsCompleted}/{academicRequirements.totalCreditsRequired}</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500"
                        style={{ width: `${(academicRequirements.creditsCompleted / academicRequirements.totalCreditsRequired) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Academic Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Core Units Completed</span>
                    <span className="font-medium">{academicRequirements.coreUnitsCompleted}/{academicRequirements.coreUnitsRequired}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Elective Units Completed</span>
                    <span className="font-medium">{academicRequirements.electiveUnitsCompleted}/{academicRequirements.electiveUnitsRequired}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Credits Remaining</span>
                    <span className="font-medium text-red-600">{academicRequirements.creditsRemaining}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'requirements':
        return (
          <div className="space-y-6">
            {/* Requirements Header */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-sky-50 rounded-lg">
                  <BarChart className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Degree Requirements</h2>
                  <p className="text-gray-600">Track your progress towards degree completion</p>
                </div>
              </div>

              {/* Progress Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <div className="bg-sky-50 p-4 rounded-lg">
                  <p className="text-sm text-sky-600">Overall Progress</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {Math.round((academicRequirements.creditsCompleted / academicRequirements.totalCreditsRequired) * 100)}%
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Degree Completion</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-600">Credits Completed</p>
                  <p className="text-2xl font-bold text-gray-900">{academicRequirements.creditsCompleted}</p>
                  <p className="text-xs text-gray-500 mt-1">of {academicRequirements.totalCreditsRequired}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-600">Current GPA</p>
                  <p className="text-2xl font-bold text-gray-900">{academicRequirements.currentGPA}</p>
                  <p className="text-xs text-gray-500 mt-1">Required: {academicRequirements.requiredGPA}+</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-600">Remaining Credits</p>
                  <p className="text-2xl font-bold text-gray-900">{academicRequirements.creditsRemaining}</p>
                  <p className="text-xs text-gray-500 mt-1">to graduate</p>
                </div>
              </div>
            </div>

            {/* Detailed Requirements */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Core Requirements */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Core Requirements</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Core Units</span>
                      <span>{academicRequirements.coreUnitsCompleted}/{academicRequirements.coreUnitsRequired}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-sky-600"
                        style={{ width: `${(academicRequirements.coreUnitsCompleted / academicRequirements.coreUnitsRequired) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">CS Core Units</span>
                      <span className="font-medium">8/10 completed</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Math Core Units</span>
                      <span className="font-medium">4/5 completed</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Science Core Units</span>
                      <span className="font-medium">4/4 completed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elective Requirements */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Elective Requirements</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Elective Units</span>
                      <span>{academicRequirements.electiveUnitsCompleted}/{academicRequirements.electiveUnitsRequired}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500"
                        style={{ width: `${(academicRequirements.electiveUnitsCompleted / academicRequirements.electiveUnitsRequired) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Technical Electives</span>
                      <span className="font-medium">5/6 completed</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">General Electives</span>
                      <span className="font-medium">3/4 completed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GPA Requirements */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">GPA Requirements</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Overall GPA</span>
                      <span>{academicRequirements.currentGPA}/{academicRequirements.requiredGPA}+</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple-500"
                        style={{ width: `${(academicRequirements.currentGPA / 4) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Major GPA</span>
                      <span className="font-medium">3.82/2.5+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Last 30 Credits GPA</span>
                      <span className="font-medium">3.75/2.5+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Required Courses */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Required Courses</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Semester Taken</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { code: 'CS101', name: 'Introduction to Programming', status: 'Completed', semester: 'Semester 1, 2022', grade: 'A' },
                      { code: 'CS201', name: 'OOP Concepts', status: 'Completed', semester: 'Semester 2, 2023', grade: 'A' },
                      { code: 'CS301', name: 'Algorithms', status: 'Completed', semester: 'Semester 1, 2024', grade: 'A-' },
                      { code: 'CS401', name: 'Advanced Programming', status: 'In Progress', semester: 'Current', grade: 'A-' },
                      { code: 'MATH101', name: 'Calculus I', status: 'Completed', semester: 'Semester 1, 2022', grade: 'B+' },
                      { code: 'MATH201', name: 'Calculus II', status: 'In Progress', semester: 'Current', grade: 'B+' },
                    ].map((course) => (
                      <tr key={course.code} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">{course.code}</div>
                          <div className="text-sm text-gray-500">{course.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            course.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {course.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {course.semester}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full
                            ${course.grade === 'A' ? 'bg-green-100 text-green-800' :
                              course.grade === 'A-' ? 'bg-green-50 text-green-700' :
                              'bg-blue-100 text-blue-800'}`}>
                            {course.grade}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'calendar':
        return (
          <div className="space-y-6">
            {/* Calendar Header */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-sky-50 rounded-lg">
                    <CalendarToday className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Academic Calendar</h2>
                    <p className="text-gray-600">Important dates and deadlines for {studentInfo.academicYear}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                  <button className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-medium hover:bg-sky-700">
                    <Print className="h-4 w-4 mr-2" />
                    Print
                  </button>
                </div>
              </div>
            </div>

            {/* Calendar Timeline */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                <div className="space-y-8">
                  {academicCalendar.map((item) => (
                    <div key={item.id} className="relative flex items-start">
                      <div className={`absolute left-6 top-2 w-4 h-4 rounded-full border-4 border-white z-10
                        ${item.status === 'Completed' ? 'bg-green-500' : 
                          item.status === 'In Progress' ? 'bg-yellow-500' : 
                          'bg-gray-300'}`}>
                      </div>
                      
                      <div className="ml-12 flex-1">
                        <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition duration-200">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                            <div>
                              <h4 className="font-medium text-gray-900">{item.event}</h4>
                              <p className="text-sm text-gray-600 mt-1">
                                <CalendarToday className="h-4 w-4 inline mr-1" />
                                {item.date}
                              </p>
                            </div>
                            <span className={`px-3 py-1 text-sm font-medium rounded-full
                              ${item.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                                item.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 
                                'bg-blue-100 text-blue-800'}`}>
                              {item.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Important Deadlines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-red-200">
                <h3 className="font-semibold text-red-900 mb-4">Upcoming Deadlines</h3>
                <div className="space-y-3">
                  {[
                    { event: 'Unit Withdrawal Deadline', date: 'Nov 01, 2024', daysLeft: '15 days', priority: 'high' },
                    { event: 'Exam Registration', date: 'Nov 15 - Nov 30, 2024', daysLeft: '30 days', priority: 'medium' },
                    { event: 'Final Fee Payment', date: 'Dec 10, 2024', daysLeft: '45 days', priority: 'high' },
                  ].map((deadline) => (
                    <div key={deadline.event} className="p-4 border border-red-100 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">{deadline.event}</h4>
                          <p className="text-sm text-gray-600 mt-1">{deadline.date}</p>
                        </div>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          deadline.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {deadline.daysLeft} left
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-sky-200">
                <h3 className="font-semibold text-sky-900 mb-4">Academic Advisor</h3>
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Person className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{studentInfo.advisor}</h4>
                    <p className="text-sm text-gray-600 mt-1">Academic Advisor</p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Email className="h-4 w-4 mr-2" />
                        {studentInfo.advisorEmail}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        {studentInfo.advisorPhone}
                      </div>
                    </div>
                    <button className="mt-4 text-sky-600 text-sm font-medium hover:text-sky-800">
                      Schedule Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-sky-50 rounded-lg">
                <School className="h-6 w-6 text-sky-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Academic Portal</h1>
                <p className="text-gray-600 text-sm mt-1">{studentInfo.program} • {studentInfo.year}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{studentInfo.name}</p>
                <p className="text-xs text-gray-500">{studentInfo.studentId}</p>
              </div>
              <div className="h-10 w-10 bg-sky-100 rounded-full flex items-center justify-center">
                <Person className="h-6 w-6 text-sky-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="p-4 sm:p-6 lg:p-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6 border border-gray-200 overflow-hidden">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-sky-500 text-sky-600 bg-sky-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="mt-8 px-4 sm:px-6 lg:px-8 py-4 border-t bg-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
          <div>
            <p className="text-sm text-gray-600">University Academic Portal • {studentInfo.academicYear}</p>
            <p className="text-xs text-gray-500 mt-1">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm text-gray-600">
              Need academic assistance? Contact: <span className="text-sky-600">academic-support@university.edu</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Academic;