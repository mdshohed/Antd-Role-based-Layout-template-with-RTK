import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import FacultyProfile from "../pages/faculty/FacultyProfile";

export const facultyPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <FacultyDashboard />,
  },
  {
    name: 'Settings',
    children: [
      {
        name: 'Profile',
        path: 'profile',
        element: <FacultyProfile/>,
      },
    ],
  },
];