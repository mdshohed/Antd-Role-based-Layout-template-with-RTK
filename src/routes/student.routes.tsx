import StudentDashboard from "../pages/student/StudentDashboard";
import StudentProfile from "../pages/student/StudentProfile";

export const studentPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <StudentDashboard />,
  },
  {
    name: 'Settings',
    children: [
      {
        name: 'Profile',
        path: 'profile',
        element: <StudentProfile/>,
      },
    ],
  },
];